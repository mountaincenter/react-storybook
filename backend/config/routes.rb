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
    end
  end
end
