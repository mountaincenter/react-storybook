# frozen_string_literal: true

#
# post serializer
#
class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :images, :post_type, :replies_count, :liked?, :likes_count, :reposted?, :reposts_count, :quote_reposts_count, :total_reposts_count,
             :bookmarked?, :bookmarks_count, :public_id, :created_at, :updated_at
  belongs_to :user
  belongs_to :parent, class_name: "Post", serializer: ParentSerializer
  belongs_to :original, class_name: "Post", serializer: OriginalSerializer
  has_many :likes
  has_many :replies, serializer: ReplySerializer
  has_many :reposts, serializer: RepostSerializer

  def reposts
    object.reposts.where(post_type: "repost")
  end

  def replies_count
    object.replies.count
  end

  def liked?
    return unless scope.present?

    object.likes.where(user_id: scope.id).exists?
  end

  def likes_count
    object.likes.count
  end

  def reposted?
    return unless scope.present?

    object.reposts.where(user_id: scope.id, post_type: "repost").exists?
  end

  def reposts_count
    object.reposts.where(post_type: "repost").count
  end

  def quote_reposts_count
    object.reposts.where(post_type: "quote_repost").count
  end

  def total_reposts_count
    object.total_reposts_count
  end

  def bookmarked?
    return unless scope.present?

    object.bookmarks.where(user_id: scope.id).exists?
  end

  def bookmarks_count
    object.bookmarks.count
  end

  def post_type
    object.post_type
  end
end
