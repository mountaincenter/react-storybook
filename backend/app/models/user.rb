# frozen_string_literal: true

#
# user model
#
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  attr_accessor :avatar_name
  attr_accessor :image_name

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User
  mount_uploader :avatar, AvatarUploader
  mount_uploader :image, ImageUploader
  before_validation :generate_username, on: :create
  before_create :set_public_id
  before_create :set_avatar_filename
  validates :username, presence: true,
                       uniqueness: { case_sensitive: false },
                       length: { in: 6..16 },
                       format: { with: /\A[a-zA-Z0-9_]+\z/,
                                 message: "can only include letters, numbers, and underscores " }

  validates :name, presence: true, length: { maximum: 30 }
  validates :email, presence: true, length: { maximum: 100 }
  validates :password, presence: true, length: { minimum: 8 }, on: :create
  validates :public_id, uniqueness: true

  has_many :follower_relationships, class_name: "Follow", foreign_key: "following_id", dependent: :destroy
  has_many :followers, through: :follower_relationships, source: :follower

  has_many :following_relationships, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy
  has_many :following, through: :following_relationships, source: :following

  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id", dependent: :destroy
  has_many :received_messages, class_name: "Message", foreign_key: "recipient_id", dependent: :destroy

  has_many :notifications, dependent: :destroy

  def following?(other_user)
    following.include?(other_user)
  end

  def self.guest
    find_or_create_by!(
      email: "guest@example.com",
      uid: "guest@example.com",
      provider: "email",
      name: "ゲストユーザー",
      profile: "ゲストユーザーです。よろしくお願いします。",
      username: "guestuser"
    ) do |user|
      user.password = SecureRandom.urlsafe_base64
    end
  end

  private

  def generate_username
    return if username.present?

    loop do
      self.username = SecureRandom.alphanumeric(8)
      break unless User.exists?(username:)
    end
  end

  def set_public_id
    self.public_id = SecureRandom.uuid
  end

  def set_avatar_filename
    return unless avatar_name.present? && avatar.present?

    avatar.file.instance_variable_set(:@original_filename, avatar_name)
  end

  def set_image_filename
    return unless image_name.present? && image.present?

    image.file.instance_variable_set(:@original_filename, image_name)
  end
end
