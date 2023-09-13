# frozen_string_literal: true

module Api
  module V1
    #
    # follows controller
    #
    class FollowsController < ApplicationController
      before_action :set_user, only: %i[create destroy]
      before_action :set_follow, only: %i[destroy]

      def create
        service = Follow::FollowCreationService.new(current_api_v1_user, @user.id)
        result = service.create_follow

        if result[:status] == :created
          render json: result[:follow], status: :created
        else
          renser json: { errors: follow.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @follow.destroy
        head :no_content
      end

      private

      def set_user
        @user = User.find(params[:user_id])
        render json: { error: "User not found" }, status: :not_found unless @user
      end

      def authenticate_user!
        render json: { status: 401, errors: ["Unauthorized"] } unless current_api_v1_user
      end
    end
  end
end
