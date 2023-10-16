# frozen_string_literal: true

#
# User Serializer
#
class UserSerializer < ActiveModel::Serializer
  attributes :id, :public_id, :name, :username, :avatar, :email, :image,
             :profile, :following?, :followed?, :uid, :provider
  has_many :posts
  def followed?
    scope&.following?(object)
  end

  def following?
    object.following.include?(scope)
  end
end
