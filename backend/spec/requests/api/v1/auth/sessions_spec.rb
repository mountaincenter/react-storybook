# frozen_string_literal: true

RSpec.describe "Api::V1::Auth::Sessions", type: :request do
  describe "POST /auth/sessions/guest_sign_in" do
    context "when guest user does not exist" do
      it "creates a new guest user" do
        expect do
          post api_v1_auth_guest_sign_in_path
        end.to change(User, :count).by(1)
      end
    end

    context "when guest user already exists" do
      before do
        User.guest
      end

      it "does not create a new guest user" do
        expect do
          post api_v1_auth_guest_sign_in_path
        end.not_to change(User, :count)
      end
    end

    it "returns tokens in the response headers" do
      post api_v1_auth_guest_sign_in_path
      expect(response.headers["access-token"]).not_to be_nil
      expect(response.headers["client"]).not_to be_nil
      expect(response.headers["uid"]).to eq("guest@example.com")
    end

    it "returns the correct JSON response" do
      post api_v1_auth_guest_sign_in_path
      expect(response.status).to eq(200)
      json = JSON.parse(response.body)
      expect(json["status"]).to eq(200)
      expect(json["message"]).to eq("ゲストユーザーでログインしました")
    end
  end
end
