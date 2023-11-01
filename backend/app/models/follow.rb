# frozen_string_literal: true

#
# follow model
#
class Follow < ApplicationRecord
  belongs_to :follower, class_name: "User", counter_cache: :following_count
  belongs_to :following, class_name: "User", counter_cache: :followers_count
  validates :follower_id, uniqueness: { scope: :following_id }

  has_many :notifications, as: :notifiable, dependent: :destroy
end
