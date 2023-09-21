# frozen_string_literal: true

require "rails_helper"

RSpec.describe Message, type: :model do
  describe "associations" do
    it { should belong_to(:sender).class_name("User") }
    it { should belong_to(:recipient).class_name("User") }
    it { should have_many(:notifications).dependent(:destroy) }
  end

  describe "validations" do
    let(:sender) { create(:user) }
    let(:recipient) { create(:user) }

    it "is valid with different sender and recipient" do
      message = build(:message, sender:, recipient:)
      expect(message).to be_valid
    end

    it "is invalid with same sender and recipient" do
      message = build(:message, sender:, recipient: sender)
      expect(message).to_not be_valid
      expect(message.errors[:base]).to include("Sender and recipient must be different users")
    end
  end

  describe "scope" do
    let(:user1) { create(:user) }
    let(:user2) { create(:user) }
    let!(:message1) { create(:message, sender: user1, recipient: user2) }
    let!(:message2) { create(:message, sender: user2, recipient: user1) }

    it "returns messages between two users" do
      result = Message.between_users(user1, user2)
      expect(result).to match_array([message1, message2])
    end
  end
end
