# frozen_string_literal: true

require "rails_helper"

RSpec.describe PostHashtag, type: :model do
  describe "associations" do
    it { should belong_to(:post) }
    it { should belong_to(:hashtag) }
  end
end
