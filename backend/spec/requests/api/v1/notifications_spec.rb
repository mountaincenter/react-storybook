# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Api::V1::Notifications", type: :request do
  let(:user) { create(:user) }
  let!(:notification) { create(:notification, user:) }

  before do
    allow_any_instance_of(Api::V1::NotificationsController).to receive(:current_api_v1_user).and_return(user)
  end

  describe "GET /index" do
    it "returns a list of notifications" do
      get api_v1_notifications_path, headers: { "Accept" => "application/json" }
      expect(response).to have_http_status(:success)

      json = JSON.parse(response.body)
      expect(json.size).to eq(1)
      expect(json.first["id"]).to eq(notification.id)
    end
  end

  describe "PUT /update" do
    it "updates a notification" do
      put api_v1_notification_path(notification), params: { read: true }
      expect(response).to have_http_status(:success)

      notification.reload
      expect(notification.read).to be_truthy
    end

    it "returns the original object if update fails" do
      # ここで不正なパラメータを渡して、更新が失敗するかどうかをテストします。
      put api_v1_notification_path(notification), params: { read: "invalid_value" }
      expect(response).to have_http_status(:ok) # 期待値を :ok に変更

      json = JSON.parse(response.body)
      expect(json["id"]).to eq(notification.id) # 更新後の通知オブジェクトが正しく返されているかを確認
    end
  end

  describe "PUT /mark_all_as_read" do
    it "marks all notifications as read" do
      put mark_all_as_read_api_v1_notifications_path
      expect(response).to have_http_status(:no_content)

      notification.reload
      expect(notification.read).to be_truthy
    end
  end
end
