# frozen_string_literal: true

module UserFollow
  #
  # Follow creation service
  #
  class FollowCreationService
    def initialize(user, followed_user_id)
      @user = user
      @followed_user_id = followed_user_id
    end

    def create_follow
      validation_result = validate_follow
      return validation_result if validation_result

      save_follow
    end

    private

    def validate_follow
      return { status: :bad_request, error: "User not found" } unless followed_user_exists?
      return { status: :unprocessable_entity, error: "Cannot follow oneself" } if following_oneself?
      return { status: :unprocessable_entity, error: "Duplicate follow relationship exists" } if duplicate_follow_exists?

      nil
    end

    def save_follow
      @follow = @user.following_relationships.build(following_id: @followed_user_id)
      if @follow.save
        return create_notification ? { status: :created, follow: @follow } : { status: :unprocessable_entity, error: "Failed to create notification" }
      end

      { status: :unprocessable_entity, errors: @follow.errors.full_messages }
    end

    def followed_user_exists?
      User.exists?(@followed_user_id)
    end

    def following_oneself?
      @user.id == @followed_user_id
    end

    def duplicate_follow_exists?
      @user.following_relationships.exists?(following_id: @followed_user_id)
    end

    def create_notification
      notification = Notification.create(
        user_id: @followed_user_id,
        notification_type: "follow",
        notifiable: @follow,
        read: false
      )
      Rails.logger.error("Failed to create notification: #{notification.errors.full_messages.join(', ')}") unless notification.persisted?
      notification.persisted?
    end
  end
end
