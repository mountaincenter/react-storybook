# frozen_string_literal: true

require "rails_helper"

RSpec.describe Hashtag, type: :model do
  describe "associations" do
    it { should have_many(:post_hashtags) }
    it { should have_many(:posts).through(:post_hashtags) }
  end
end
