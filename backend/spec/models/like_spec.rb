# frozen_string_literal: true

require "rails_helper"

RSpec.describe Like, type: :model do
  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:post) }
    it { should have_many(:notifications).dependent(:destroy) }
  end

  describe "callbacks" do
    let(:user) { create(:user) }
    let(:post) { create(:post, user:) }

    it "creates a notification after a like is created" do
      expect do
        create(:like, user:, post:)
      end.to change(Notification, :count).by(1)

      notification = Notification.last
      expect(notification.user_id).to eq(post.user_id)
      expect(notification.notification_type).to eq("like")
      expect(notification.notifiable).to be_a(Like)
      expect(notification.read).to be_falsey
    end
  end
end
