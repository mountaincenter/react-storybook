class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :username, :string, default: '', null: false, after: :name
    add_column :users, :avatar, :string, after: :username
    add_column :users, :profile, :string, after: :avatar
    add_column :users, :public_id, :string, after: :profile

    # Add indexes
    add_index :users, :username, unique: true
    add_index :users, :public_id, unique: true
  end
end
