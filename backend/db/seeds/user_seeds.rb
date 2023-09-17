# frozen_string_literal: true

unless User.exists?
  avatars = [
    File.open("app/assets/images/icon01.png"),
    File.open("app/assets/images/icon02.jpeg"),
    File.open("app/assets/images/icon03.png"),
    nil
  ]
  images = [
    File.open("app/assets/images/image01.jpeg"),
    File.open("app/assets/images/image02.jpeg"),
    File.open("app/assets/images/image03.jpeg"),
    nil
  ]

  num_users = 10
  num_users.times do |i|
    email = "test#{i + 1}@example.com"
    name = Faker::Name.name
    Faker::Config.locale = "ja"
    jp_name = Faker::Name.name
    Faker::Config.locale = nil
    name = i.odd? ? jp_name : name
    avatar = avatars[i % avatars.size]
    image = images[i % images.size]
    User.create!(
      email:,
      password: "password",
      uid: email,
      provider: "email",
      name:,
      username: "testuser#{i + 1}",
      avatar:,
      image:,
      profile: Faker::Lorem.paragraph_by_chars(number: 160, supplemental: false),
      confirmed_at: Time.zone.now
    )
  end

  users = User.all
  users.each do |user|
    num_to_follow = rand(1..num_users)
    users_to_follow = users.where.not(id: user.id).sample(num_to_follow)
    users_to_follow.each do |user_to_follow|
      unless user.following.include?(user_to_follow)
        follow = user.following_relationships.create(following_id: user_to_follow.id)
        Notification.create!(user: user_to_follow, notifiable: follow, notification_type: "follow")
      end
    end
  end
end
