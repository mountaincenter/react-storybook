# frozen_string_literal: true

# frozen_stirng_literal: true

module PostServices
  #
  # post service
  #
  class PostService
    def initialize(user, post_params)
      @user = user
      @post_params = post_params
    end

    def create_post
      post = @user.posts.new(@post_params)
      post.save
      post
    end

    private

    def build_post
      @user.posts.new(@post_params).tap(&:save)
    end

    def create_mention_if_needed(post)
      return unless post.persisted? && post.content.include?("@")

      create_mention(post)
    end

    def create_mention(post)
      usernames = post.content.scan(/@\w+/)
      usernames.each do |username|
        user = User.find_by(username: username.delete("@"))
        next unless user

        Notification.create(
          user_id: user.id,
          notifiable: post,
          notification_type: "mention"
        )
      end
    end
  end
end
