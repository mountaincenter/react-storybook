# frozen_string_literal: true

#
# hashtag model
#
class Hashtag < ApplicationRecord
  has_many :post_hashtags
  has_many :posts, through: :post_hashtags

  def self.trending(period)
    select("hashtags.*, COUNT(post_hashtags.id) AS count")
      .joins(:post_hashtags)
      .where("post_hashtags.created_at > ?", period.ago)
      .group("hashtags.id")
      .order("count DESC")
  end
end
