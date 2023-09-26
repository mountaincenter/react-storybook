# frozen_string_literal: true

FactoryBot.define do
  factory :post do
    content { "This is a test post." }
    post_type { "original" }
    user

    trait :with_images do
      images do
        [
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test01.png"), "image/png"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test02.png"), "image/png"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test03.png"), "image/png"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test04.jpeg"), "image/jpeg")
        ]
      end
    end

    trait :with_too_many_images do
      images do
        [
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test01.png"), "image/png"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test02.png"), "image/png"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test03.png"), "image/png"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test04.jpeg"), "image/jpeg"),
          Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "post_images_test05.jpeg"), "image/jpeg")
        ]
      end
    end
  end
end
