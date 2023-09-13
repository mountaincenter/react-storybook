# frozen_string_literal: true

module Api
  module V1
    #
    # users controller
    #
    class UsersController < ApplicationController
      before_action :set_user, only: %i[show update]
      rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

      def index
        users = User.all
        render json: users, each_serializer: UserSerializer, scope: current_api_v1_user, status: 200
      end

      def show
        render json: @user, each_serializer: UserSerializer, scope: current_api_v1_user, status: 200
      end

      def update
        if @user.update(user_params)
          render json: @user, serializer: UserSerializer, scope: current_api_v1_user, status: 200
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def following
        user = User.find_by!(username: params[:id])
        render json: user.following, each_serializer: FollowingUserSerializer, scope: current_api_v1_user, status: 200
      end

      def followers
        user = User.find_by!(username: params[:id])
        render json: user.followers, each_serializer: FollowerUserSerializer, scope: current_api_v1_user, status: 200
      end

      private

      def set_user
        @user = User.find_by!(username: params[:id])
      end

      def user_params
        params.permit(:name, :username, :email, :avatar, :profile, :image)
      end

      def record_not_found
        render json: { error: "Record not found" }, status: :not_found
      end
    end
  end
end
