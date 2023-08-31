# frozen_string_literal: true

#
# ユーザー
#
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User
  mount_uploader :avatar, AvatarUploader
  before_validation :generate_username, on: :create
  before_create :set_public_id
  validates :username, presence: true,
                       uniqueness: { case_sensitive: false },
                       length: { in: 6..16 },
                       format: { with: /\A[a-zA-Z0-9_]+\z/,
                                 message: "can only include letters, numbers, and underscores " }

  validates :name, presence: true, length: { maximum: 30 }
  validates :email, presence: true, length: { maximum: 100 }
  validates :password, presence: true, length: { minimum: 8 }, on: :create
  validates :public_id, uniqueness: true

  private

  def generate_username
    return if username.present?

    loop do
      self.username = SecureRandom.alphanumeric(8)
      break unless User.exists?(username:)
    end
  end

  def set_public_id
    self.public_id = SecureRandom.uuid
  end
end
