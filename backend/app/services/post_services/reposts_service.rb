module PostServices
  #
  # Repost Service
  #
  class RepostsService
    def initialize(post)
      @post = post
    end

    def call
      @post.reposts.where(post_type: 'repost').includes(:user).map(&:user)
    end
  end
end