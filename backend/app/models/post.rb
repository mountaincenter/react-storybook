# frozen_string_literal: true

#
# post model
#
class Post < ApplicationRecord
  attr_accessor :images_name

  belongs_to :user
  belongs_to :parent, class_name: "Post", optional: true
  belongs_to :original, class_name: "Post", optional: true
  has_many :replies, class_name: "Post", foreign_key: "parent_id", dependent: :destroy
  has_many :reposts, class_name: "Post", foreign_key: "original_id", dependent: :destroy
  has_many :quote_reposts, class_name: "Post", foreign_key: "original_id", dependent: :destroy
  mount_uploaders :images, ImagesUploader
  validates :content, length: { maximum: 140 }
  validates :content, presence: true, if: :content_required?
  validates :content, absence: true, unless: :content_required?
  validates :public_id, uniqueness: { case_sensitive: true }
  validates :post_type, inclusion: { in: %w[original reply repost quote_repost] }
  validate :images_count_with_limit
  validates_uniqueness_of :user_id, scope: %i[original_id post_type], if: :repost_or_quote_repost?, message: "は同じ投稿に対してリツイートまたは引用リツイートを複数回することはできません"

  has_many :likes, dependent: :destroy
  has_many :post_hashtags
  has_many :hashtags, through: :post_hashtags
  has_many :bookmarks, dependent: :destroy
  has_many :bookmarking_users, through: :bookmarks, source: :user

  before_create :set_public_id
  before_create :set_images_filename

  after_save :create_hashtags

  after_create :increment_counts
  after_destroy :decrement_counts

  def total_reposts_count
    reposts_count + quote_reposts_count
  end

  private

  def set_public_id
    self.public_id = SecureRandom.uuid
  end

  def create_hashtags
    return unless content&.include?("#")

    content.scan(/#[\p{L}\w]+/).each do |hashtag|
      tag = Hashtag.find_or_create_by(name: hashtag.downcase.delete("#"))
      hashtags << tag
    end
  end

  def content_required?
    %w[original reply quote_repost].include?(post_type)
  end

  def set_images_filename
    return unless images.present? && images_name.present?

    images.each_with_index do |image, index|
      image.file.instance_variable_set(:@original_filename, images_name[index])
    end
  end

  def images_count_with_limit
    return unless images.count > 4

    errors.add(:images, "画像は4枚までです")
  end

  def increment_counts
    change_counts(:increment)
  end

  def decrement_counts
    change_counts(:decrement)
  end

  def change_counts(method)
    column = select_count_column
    return unless column

    original.class.transaction do
      original.send("#{method}!", column)
      total_reposts_count if repost_or_quote_repost?
    end
  end

  def select_count_column
    {
      "repost" => :reposts_count,
      "quote_repost" => :quote_reposts_count,
      "reply" => :replies_count
    }[post_type]
  end

  def repost_or_quote_repost?
    %w[repost quote_repost].include?(post_type)
  end
end
