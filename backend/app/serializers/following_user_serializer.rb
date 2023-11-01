# frozen_string_literal: true

#
# following user serializer
#
class FollowingUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :profile, :avatar, :followed?, :following?, :followers_count, :following_count

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
