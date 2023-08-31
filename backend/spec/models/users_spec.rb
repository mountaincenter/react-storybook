# frozen_string_literal: true

require "rails_helper"

RSpec.describe User, type: :model do
  subject { build(:user) }
  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
    it { should validate_length_of(:password).is_at_least(8).is_at_most(128) }
    it { should allow_value("username_123").for(:username) }
    it { should_not allow_value("username 123").for(:username) }
    it { should_not allow_value("username-123").for(:username) }
    it { should_not allow_value("username!123").for(:username) }
    it { should_not allow_value("user").for(:username) }
    it { should_not allow_value("username1234567890").for(:username) }
    it { should validate_length_of(:username).is_at_least(6).is_at_most(16) }
    it { should validate_uniqueness_of(:username).case_insensitive }
    it { should validate_presence_of(:name) }
    it { should validate_length_of(:name).is_at_most(30) }
    it { should validate_presence_of(:email) }
    it { should validate_length_of(:email).is_at_most(100) }
    it { should validate_uniqueness_of(:email).case_insensitive.scoped_to(:provider) }
    it { should validate_presence_of(:password) }
    it { should validate_length_of(:password).is_at_least(8) }
    it { should validate_uniqueness_of(:public_id).case_insensitive }

    context "on create" do
      it "should validate presence of password" do
        user = User.new(password: nil, password_confirmation: nil)
        expect(user).to_not be_valid
        expect(user.errors[:password]).to include("can't be blank")
      end
    end

    describe "callbacks" do
      it "generates a username before validation on create" do
        user = build(:user, username: nil)
        user.valid?
        expect(user.username).to_not be_nil
      end
    end
  end
end
