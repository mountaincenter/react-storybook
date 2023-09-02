# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Api::V1::Auth::CustomConfirmations", type: :request do
  describe "GET /confirmations#show" do
    let!(:user) { create(:user, :unconfirmed) }

    it "redirects to the login url after successful confirmation" do
      get api_v1_user_confirmation_url(confirmation_token: user.confirmation_token)
      expect(response).to redirect_to(login_url)
    end
  end

  private

  def login_url
    Rails.env.production? ? "https://web.ymnk.fun/login" : "http://localhost:5174/login"
  end
end
