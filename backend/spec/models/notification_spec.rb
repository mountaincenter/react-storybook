# frozen_string_literal: true

require "rails_helper"

RSpec.describe Notification, type: :model do
  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:notifiable) }
  end

  describe "validations" do
    it { should validate_inclusion_of(:notification_type).in_array(Notification::VALID_NOTIFICATION_TYPES) }
  end

  describe "#message" do
    context "when notification_type is 'follow'" do
      let(:follower) { create(:user) }
      let(:follow) { create(:follow, follower:) }
      let(:notification) { create(:notification, notifiable: follow, notification_type: "follow") }

      it "returns the correct message" do
        expected_message = {
          avatar: follower.avatar.file.filename,
          title: "#{follower.name}さんからフォローされました",
          body: nil
        }
        actual_message = notification.message
        actual_message[:avatar] = actual_message[:avatar].file.filename
        expect(actual_message).to eq expected_message
      end
    end
  end

  describe "factories" do
    it "has a valid factory" do
      expect(build(:notification)).to be_valid
    end
  end
end
