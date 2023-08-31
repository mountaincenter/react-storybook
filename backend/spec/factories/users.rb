# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    provider { "email" }
    sequence(:email) { |n| "test#{n}@example.com" }
    sequence(:name) { |n| "testuser#{n}" }
    sequence(:username) { |n| "username#{n}" }
    uid { email }
    password { "password" }
    remember_created_at { nil }
    tokens { nil }
  end
end
