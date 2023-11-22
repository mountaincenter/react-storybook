# frozen_string_literal: true

module Api
  module V1
    #
    # posts controller
    #
    class PostsController < ApplicationController
      before_action :set_post, only: %i[show destroy]

      def index
        posts = PostServices::PostFetcher.new(current_api_v1_user, query: params[:query]).fetch
        render json: posts, each_serializer: PostSerializer, scope: current_api_v1_user
      end

      def likes
        post = Post.find_by!(public_id: params[:id])
        likers = PostServices::LikesService.new(post).call
        render json: likers, each_serializer: UserSerializer, scope: current_api_v1_user
      end

      def reposts
        post = Post.find_by!(public_id: params[:id])
        reposters = PostServices::RepostsService.new(post).call
        render json: reposters, each_serializer: UserSerializer, scope:  current_api_v1_user
      end

      def quote_reposts
        post = Post.find_by!(public_id: params[:id])
        quote_reposters = PostServices::QuoteRepostsService.new(post).call
        render json: quote_reposters, each_serializer: QuoteRepostSerializer, scope: current_api_v1_user
      end

      def show
        render json: @post, each_serializer: PostSerializer, scope: current_api_v1_user
      end

      def create
        post_service = select_service
        post = post_service.create_post
        if post.persisted?
          render json: post
        else
          render json: { error: post.errors }
        end
      end

      def destroy
        @post.destroy
        render json: @post
      end

      private

      def set_post
        @post = Post.find_by!(public_id: params[:id])
      end

      def post_params
        params.permit(:content, { images: [] })
      end

      def select_service
        service_args = [current_api_v1_user, post_params, post_based_on_type]
        service_args << post_based_on_type unless params[:post_type] == "original"
        service_class = service_mapping[params[:post_type]] || PostServices::PostService
        service_class.new(*service_args)
      end

      def service_mapping
        {
          "reply" => PostServices::ReplyService,
          "repost" => PostServices::RepostService,
          "quote_repost" => PostServices::QuoteRepostService
        }
      end

      def post_based_on_type
        case params[:post_type]
        when "original"
          nil
        when "reply"
          params[:parent_id]
        when "repost", "quote_repost"
          params[:original_id]
        else
          raise "存在しない投稿タイプが指定されました: #{params[:post_type]}"
        end
      end
    end
  end
end
