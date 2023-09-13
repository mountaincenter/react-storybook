# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Api::V1::Users", type: :request do
  let(:user) { create(:user) } # FactoryBotを使用してユーザーを作成
  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "GET /index" do
    it "returns a list of users" do
      get(api_v1_users_path, headers:)

      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end
  end

  describe "GET /show" do
    it "returns a specific user" do
      get(api_v1_user_path(user.username), headers:)

      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end

    it "returns a 404 if user is not found" do
      get(api_v1_user_path("nonexistentusername"), headers:)

      expect(response).to have_http_status(404)
    end
  end

  describe "PATCH/PUT /update" do
    let(:valid_attributes) { { name: "New Name" } }
    let(:invalid_attributes) { { name: "" } } # 無効なパラメータの例

    it "updates the user" do
      patch(api_v1_user_path(user.username), params: valid_attributes, headers:)

      expect(response).to have_http_status(200)
      expect(user.reload.name).to eq("New Name")
    end

    it "does not update the user with invalid attributes" do
      patch(api_v1_user_path(user.username), params: invalid_attributes, headers:)

      expect(response).to have_http_status(422)
      expect(user.reload.name).not_to eq("")
    end
  end
end
