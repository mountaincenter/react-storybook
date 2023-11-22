# frozen_string_literal: true

module PostServices
  #
  # LikeService
  #
  class LikesService
    def initialize(post)
      @post = post
    end

    def call
      @post.likes.includes(:user).map(&:user)
    end
  end
end
