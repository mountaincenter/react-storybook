# frozen_string_literal: true

#
# notification model
#
class Notification < ApplicationRecord
  self.inheritance_column = nil
  belongs_to :user
  belongs_to :notifiable, polymorphic: true

  VALID_NOTIFICATION_TYPES = %w[follow message like mention reply repost quote_repost].freeze
  validates :notification_type, inclusion: { in: VALID_NOTIFICATION_TYPES }

  def message
    send("message_for_#{notification_type}")
  end

  def message_for_follow
    return unless notifiable.is_a?(Follow)

    follower = User.find_by(id: notifiable.follower_id)
    build_message(follower, "#{follower.name}さんからフォローされました")
  end

  def message_for_message
    message = notifiable
    sender = User.find_by(id: message.sender_id)
    build_message(sender, "#{sender.name}さんからメッセージが届いています", message.body)
  end

  def message_for_like
    like = notifiable
    post = like.post
    user = User.find_by(id: post.user_id)
    likers = post_likes_users(post)
    likers_count = likers.count
    message_title = build_like_message_title(likers, likers_count)
    build_message(user, message_title, post.content)
  end

  def message_for_mention
    post = notifiable
    user = User.find_by(id: post.user_id)
    build_message(user, "#{user.name}さんからのメンションがあります", post.content)
  end

  def message_for_reply
    post = notifiable
    user = User.find_by(id: post.user_id)
    build_message(user, "#{user.name}さんからの返信があります", post.content)
  end

  def message_for_repost
    return unless notifiable.is_a?(Post)
    post = notifiable
    user = User.find_by(id: post.user_id)
    return unless user
    build_message(user, "#{user.name}さんがあなたの投稿をリツイートしました", post.content)
  end

  def message_for_quote_repost
    post = notifiable
    user = User.find_by(id: post.user_id)
    build_message(user, "#{user.name}さんがあなたの投稿を引用リツイートしました", post.content)
  end

  private

  def post_likes_users(post)
    post.likes.map(&:user)
  end

  def build_like_message_title(likers, likers_count)
    if likers_count == 1
      "#{likers.first.name}さんがあなたの投稿にいいねしました"
    else
      "#{likers.first.name}さん他#{likers_count - 1}名があなたの投稿にいいねしました"
    end
  end

  def build_message(user, title, body = nil)
    {
      avatar: user.avatar,
      title:,
      body:
    }
  end
end
