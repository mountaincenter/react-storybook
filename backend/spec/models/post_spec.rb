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

    context "when post_type is 'reply'" do
      subject { build(:post, :reply) }
      it { should validate_presence_of(:content) }
      it "has parent" do
        expect(subject.parent).to be_present
      end
    end

    context "when post_type is 'repost'" do
      subject { build(:post, :repost) }
      it "does not have content" do
        expect(subject.content).to be_nil
      end

      context "when content is provided" do
        subject { build(:post, post_type: "repost", content: "Some content") }
        it { should_not be_valid }
        it "has an error on content" do
          subject.valid?
          expect(subject.errors[:content]).to include("must be blank")
        end
      end

      it "has original" do
        expect(subject.original).to be_present
      end
    end

    context "when post_type is 'quote_repost'" do
      subject { build(:post, :quote_repost) }
      it { should validate_presence_of(:content) }
      it "has original" do
        expect(subject.original).to be_present
      end
    end
  end
end
