# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ["https://web.ymnk.fun", "localhost:5174", "http://www.example.com:80", "localhost:80", "test.host"]

    resource "*",
             headers: :any,
             expose: %i[access-token client expiry token-type uid],
             methods: %i[get post put patch delete options head]
  end
end
