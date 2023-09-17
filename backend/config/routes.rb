# frozen_string_literal: true

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
  namespace :api do
    namespace :v1 do
      resources :elb, only: %i[index]
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: "api/v1/auth/registrations",
        confirmations: "api/v1/auth/custom_confirmations"
      }
      namespace :auth do
        resources :sessions, only: %i[index]
        post "guest_sign_in", to: "sessions#guest_sign_in"
      end

      resources :notifications, only: %i[index update] do
        collection do
          put :mark_all_as_read
        end
      end

      resources :users, only: %i[index show update] do
        resource :follows, only: %i[create destroy]
        member do
          get :following, :followers
        end
      end
    end
  end
end
