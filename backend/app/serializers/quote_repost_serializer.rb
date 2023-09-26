# frozen_string_literal: true

#
# quote repost serializer
#
class QuoteRepostSerializer < ActiveModel::Serializer
  attributes :id, :content, :images, :liked?, :reposted?, :user, :public_id, :parent_id, :created_at, :updated_at
  has_many :likes

  def liked?
    return unless scope.present?

    object.likes.where(user_id: scope.id).exists?
  end

  def reposted?
    return unless scope.present?

    object.reposts.where(user_id: scope.id, post_type: "repost").exists?
  end

  def original_id
    object.original.id
  end

  def parent_id
    object.parent.id if object.parent.present?
  end

  def user
    object.user.as_json(only: %i[id name username avatar])
  end
end
