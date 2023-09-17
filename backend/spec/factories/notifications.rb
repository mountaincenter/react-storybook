# frozen_string_literal: true

FactoryBot.define do
  factory :notification do
    user { association(:user) }
    notifiable { association(:user) }
    notification_type { "follow" }
  end
end
