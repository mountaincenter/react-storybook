# frozen_string_literal: true

module Api
  module V1
    module Auth
      #
      # sessions controller
      #
      class SessionsController < ApplicationController
        def index
          user = current_api_v1_user
          if user
            render json: { status: 200, current_user: user }
          else
            render json: { status: 500, message: "ユーザーが存在しません" }
          end
        end

        def guest_sign_in
          user = User.guest
          tokens = user.create_new_auth_token
          response.headers["access-token"] = tokens["access-token"]
          response.headers["client"] = tokens["client"]
          response.headers["uid"] = tokens["uid"]

          render json: { status: 200, user:, message: "ゲストユーザーでログインしました" }
        end
      end
    end
  end
end
