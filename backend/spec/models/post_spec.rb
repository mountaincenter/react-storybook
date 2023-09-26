# frozen_string_literal: true

require "rails_helper"

RSpec.describe Post, type: :model do
  describe "validations" do
    subject { build(:post) }

    it { should validate_length_of(:content).is_at_most(140) }
    it { should validate_uniqueness_of(:public_id) }
    it { should validate_inclusion_of(:post_type).in_array(%w[original reply repost quote_repost]) }

    context "when post_type is 'original'" do
      it { should validate_presence_of(:content) }
    end

    # ... 他の post_type に関するテストも追加 ...

    context "with 4 images" do
      let(:post) { build(:post, :with_images) }

      it "is valid" do
        expect(post).to be_valid
      end
    end

    context "with more than 4 images" do
      let(:post) { build(:post, :with_too_many_images) }

      it "is not valid" do
        expect(post).not_to be_valid
        expect(post.errors[:images]).to include("画像は4枚までです")
      end
    end
  end

  # ... 他の関連付け、コールバック、メソッドに関するテストも追加 ...
end
