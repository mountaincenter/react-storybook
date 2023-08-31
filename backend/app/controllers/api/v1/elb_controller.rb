# frozen_string_literal: true

module Api
  module V1
    #
    # ELBのヘルスチェック用
    #
    class ElbController < ApplicationController
      def index
        render json: { message: "ok" }
      end
    end
  end
end
