# frozen_string_literal: true

#
# follow model
#
class Follow < ApplicationRecord
  belongs_to :follower, class_name: "User"
  belongs_to :following, class_name: "User"
  validates :follower_id, uniqueness: { scope: :following_id }

  has_many :notifications, as: :notifiable, dependent: :destroy
end
