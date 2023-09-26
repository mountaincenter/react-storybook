# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Api::V1::Messages", type: :request do
  let(:confirmed_user) { create(:user, :confirmed) }
  let(:other_confirmed_user) { create(:user, :confirmed) }
  let!(:message) { create(:message, sender: confirmed_user, recipient: other_confirmed_user) }

  before do
    allow_any_instance_of(Api::V1::MessagesController).to receive(:current_api_v1_user).and_return(confirmed_user)
  end

  describe "GET /index" do
    before do
      get api_v1_messages_path
    end

    it "returns a successful response" do
      expect(response).to have_http_status(:ok)
    end

    # it "returns a list of unique conversations" do
    #   expect(json_response.size).to eq(1)
    #   expect(json_response.first["public_id"]).to eq(other_confirmed_user.public_id)
    # end
  end

  describe "POST /create" do
    context "when valid" do
      let(:params) { { public_id: other_confirmed_user.public_id, body: "Hello!" } }

      it "creates a new message" do
        expect { post api_v1_messages_path, params: }.to change(Message, :count).by(1)
        expect(response).to have_http_status(:created)
        expect(json_response[:body]).to eq("Hello!")
      end
    end

    context "when sending to non-existent user" do
      let(:params) { { public_id: "non-existent-public-id", body: "Hello!" } }

      it "returns an error" do
        post(api_v1_messages_path, params:)
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  # describe "GET /conversations" do
  #   before do
  #     get conversations_api_v1_message_path(other_confirmed_user.public_id)
  #   end

  #   it "returns a list of messages between the two users" do
  #     expect(response).to have_http_status(:ok)
  #     expect(json_response.size).to eq(1)
  #     expect(json_response.first["body"]).to eq(message.body)
  #   end
  # end
end
