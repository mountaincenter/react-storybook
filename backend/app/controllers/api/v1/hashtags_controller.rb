# frozen_string_literal: true

module Api
  module V1
    #
    # hashtags controller
    #
    class HashtagsController < ApplicationController
      def posts
        @hashtag = Hashtag.find_by(name: params[:id].downcase)
        @posts = @hashtag.posts
        render json: @posts, each_serializer: PostSerializer
      end
    end
  end
end
