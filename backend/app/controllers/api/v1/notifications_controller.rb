# frozen_string_literal: true

module Api
  module V1
    #
    # notifications controller
    #
    class NotificationsController < ApplicationController
      def index
        notifications = current_api_v1_user.notifications.order(created_at: :desc)
        render json: notifications
      end

      def update
        notification = current_api_v1_user.notifications.find(params[:id])
        if notification.update(notification_params)
          render json: notification
        else
          render json: { error: notification.errors.full_message }, status: :unprocessable_entity
        end
      end

      def mark_all_as_read
        current_api_v1_user.notifications.where(read: false).update_all(read: true)
        head :no_content
      end

      private

      def notification_params
        params.permit(:read)
      end
    end
  end
end
