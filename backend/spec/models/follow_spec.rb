# frozen_string_literal: true

require "rails_helper"

RSpec.describe Follow, type: :model do
  describe "associations" do
    it { should belong_to(:follower).class_name("User") }
    it { should belong_to(:following).class_name("User") }
    it { should have_many(:notifications).dependent(:destroy) }
  end

  describe "validations" do
    subject { build(:follow) }
    it { should validate_uniqueness_of(:follower_id).scoped_to(:following_id) }
  end

  describe "factories" do
    it "has a valid factory" do
      expect(build(:follow)).to be_valid
    end

    it "creates distinct follower and following" do
      follow = create(:follow)
      expect(follow.follower_id).not_to eq(follow.following_id)
    end
  end
end
