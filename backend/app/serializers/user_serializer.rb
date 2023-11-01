# frozen_string_literal: true

#
# User Serializer
#
class UserSerializer < ActiveModel::Serializer
  attributes :id, :public_id, :name, :username, :avatar, :email, :image,
             :profile, :following?, :followed?, :followers_count, :following_count,
             :uid, :provider
  has_many :posts
  def followed?
    scope&.following?(object)
  end

  def following?
    object.following.include?(scope)
  end

  def followers_count
    object.followers_count
  end

  def following_count
    object.following_count
  end
end
