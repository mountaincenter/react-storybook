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
    avatar { Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "avatar_test.jpg"), "image/jpg") }
    image { Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "image_test.jpeg"), "image/jpeg") }

    trait :unconfirmed do
      confirmed_at { nil }
    end

    trait :confirmed do
      confirmed_at { Time.current }
    end
  end
end
