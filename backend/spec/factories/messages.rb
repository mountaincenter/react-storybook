# frozen_string_literal: true

FactoryBot.define do
  factory :message do
    association :sender, factory: :user
    association :recipient, factory: :user
    body { "Hello, this is a sample message!" }

    trait :invalid do
      sender { nil }
      recipient { nil }
    end
  end
end
