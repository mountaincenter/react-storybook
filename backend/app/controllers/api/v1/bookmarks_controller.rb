# frozen_string_literal: true

module Api
  module V1
    #
    # bookmarks controller
    #
    class BookmarksController < ApplicationController
      before_action :set_bookmark, only: :destroy

      def create
        post = Post.find_by!(public_id: params[:post_id])
        bookmark = current_api_v1_user.bookmarks.build(post_id: post.id)
        if bookmark.save
          render json: bookmark, status: :created
        else
          render json: { errors: bookmark.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @bookmark.destroy
        head :no_content
      end

      private

      def set_bookmark
        post = Post.find_by!(public_id: params[:post_id])
        @bookmark = Bookmark.find_by!(post_id: post.id, user_id: current_api_v1_user.id)
        head :not_found unless @bookmark
      end
    end
  end
end
