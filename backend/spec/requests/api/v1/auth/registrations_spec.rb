# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Api::V1::Auth::Registrations", type: :request do
  describe "POST /registrations#create" do
    let(:avatar_file) { Rack::Test::UploadedFile.new(Rails.root.join("spec", "fixtures", "avatar_test.jpg"), "image/jpg") }
    let(:valid_params) do
      {
        email: "test@example.com",
        password: "password123",
        password_confirmation: "password123",
        name: "Test User",
        username: "testuser",
        avatar: avatar_file
      }
    end

    it "creates a new user" do
      expect do
        post api_v1_user_registration_url, params: valid_params
      end.to change(User, :count).by(1)
      expect(response).to have_http_status(200)
    end

    it "returns an error when email is already taken" do
      create(:user, email: "test@example.com")
      post api_v1_user_registration_url, params: valid_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json["errors"]["email"]).to include("has already been taken")
    end
  end
end
