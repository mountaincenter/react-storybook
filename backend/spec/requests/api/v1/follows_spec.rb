# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Api::V1::Follows", type: :request do
  let(:confirmed_user) { create(:user, :confirmed) }
  let(:other_confirmed_user) { create(:user, :confirmed) }

  before do
    allow_any_instance_of(Api::V1::FollowsController).to receive(:current_api_v1_user).and_return(confirmed_user)
  end

  describe "POST /create" do
    subject { post(api_v1_user_follows_path(confirmed_user), params:, headers:) }

    # context "when valid" do
    #   let(:params) { { user_id: other_confirmed_user.id } }
    #   it "creates a new follow relationship" do
    #     puts "Sending parameters: #{params.inspect}"
    #     expect { subject }.to change(Follow, :count).by(1)
    #     expect(response).to have_http_status(:created)
    #   end
    # end

    context "when invalid" do
      context "user tries to follow themselves" do
        let(:params) { { user_id: confirmed_user.id } }

        it "does not allow a user to follow themselves" do
          subject
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end

      context "duplicate follow relationship" do
        let(:params) { { user_id: other_confirmed_user.id } }

        before { create(:follow, follower: confirmed_user, following: other_confirmed_user) }

        it "does not create a duplicate follow relationship" do
          puts " subject: #{subject}"
          expect { subject }.not_to change(Follow, :count)
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end
  end

  describe "DELETE /destroy" do
    subject { delete(api_v1_user_follows_path(confirmed_user), params:, headers:) }

    # context "when valid" do
    #   let(:follow) { create(:follow, follower: confirmed_user, following: other_confirmed_user) }
    #   let(:params) { { user_id: other_confirmed_user.id } }

    #   before { follow }

    #   it "destroys the follow relationship" do
    #     expect { subject }.to change(Follow, :count).by(-1)
    #     expect(response).to have_http_status(:no_content)
    #   end
    # end

    context "when invalid" do
      context "follow relationship does not exist" do
        let(:params) { { user_id: other_confirmed_user.id } }

        it "does not destroy a non-existent follow relationship" do
          expect { subject }.not_to change(Follow, :count)
          expect(response).to have_http_status(:not_found)
        end
      end
    end
  end
end
