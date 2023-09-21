# frozen_string_literal: true

#
# notification model
#
class Notification < ApplicationRecord
  self.inheritance_column = nil
  belongs_to :user
  belongs_to :notifiable, polymorphic: true

  VALID_NOTIFICATION_TYPES = %w[follow message].freeze
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

  private

  def build_message(user, title, body = nil)
    {
      avatar: user.avatar,
      title:,
      body:
    }
  end
end
