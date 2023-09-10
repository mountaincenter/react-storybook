# frozen_string_literal: true

#
# User Serializer
#
class UserSerializer < ActiveModel::Serializer
  attributes :id, :public_id, :name, :username, :avatar, :email,
             :profile, :uid, :provider
end
