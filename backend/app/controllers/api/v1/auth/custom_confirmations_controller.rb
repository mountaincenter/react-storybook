# frozen_string_literal: true

module Api
  module V1
    module Auth
      #
      # custom confirmations controller
      #
      class CustomConfirmationsController < DeviseTokenAuth::ConfirmationsController
        def show
          super do |resource|
            redirect_to login_url, allow_other_host: true and return if resource.errors.empty?
          end
        end

        private

        def login_url
          Rails.env.production? ? "https://web.ymnk.fun/redirect" : "http://localhost:5174/redirect"
        end
      end
    end
  end
end
