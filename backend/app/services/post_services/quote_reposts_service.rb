# frozen_string_literal: true

module PostServices
  #
  # QuoteReposts Service
  #
  class QuoteRepostsService
    def initialize(post)
      @post = post
    end

    def call
      @post.reposts.where(post_type: "quote_repost").includes(:user)
    end
  end
end
