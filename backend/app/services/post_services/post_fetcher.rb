# frozen_string_literal: true

module PostServices
  #
  # post fetch
  #
  class PostFetcher
    def initialize(current_api_v1_user, query: nil)
      @current_api_v1_user = current_api_v1_user
      @query = query
    end

    def fetch
      find_posts
    end

    private

    def find_posts
      if @query.present?
        find_posts_by_query
      else
        find_all_posts
      end
    end

    def find_posts_by_query
      hashtag = Hashtag.find_by(name: @query.downcase.delete("#"))
      if hashtag
        hashtag.posts
      else
        Post.where("content LIKE ?", "%#{@query}%")
      end
    end

    def find_all_posts
      Post.includes(:user).order(created_at: :desc)
    end
  end
end
