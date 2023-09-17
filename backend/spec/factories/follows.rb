# frozen_string_literal: true

FactoryBot.define do
  factory :follow do
    follower { association(:user) }
    following { association(:user) }

    after(:build) do |follow|
      follow.following = FactoryBot.create(:user) if follow.follower == follow.following
    end
  end
end
