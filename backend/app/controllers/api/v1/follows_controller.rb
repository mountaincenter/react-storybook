# frozen_string_literal: true

module Api
  module V1
    #
    # follows controller
    #
    class FollowsController < ApplicationController
      before_action :authenticate_user!
      before_action :set_user, only: %i[create destroy]
      before_action :set_follow, only: %i[destroy]

      def create
        Rails.logger.debug("Received parameters: #{params.inspect}")

        service = UserFollow::FollowCreationService.new(current_api_v1_user, @user.id)
        result = service.create_follow

        if result[:status] == :created
          render json: result[:follow], status: :created
        else
          render json: { errors: result[:errors] }, status: :unprocessable_entity
        end
      end

      def destroy
        @follow.destroy
        head :no_content
      end

      private

      def set_user
        @user = User.find_by(id: params[:user_id])
        render json: { error: "User not found" }, status: :not_found unless @user
      end

      def set_follow
        @follow = current_api_v1_user.following_relationships.find_by(following_id: @user.id)
        render json: { error: "Follow relationship not found" }, status: :not_found unless @follow
      end

      def authenticate_user!
        render json: { status: :unauthorized, errors: ["Unauthorized"] } unless current_api_v1_user
      end
    end
  end
end