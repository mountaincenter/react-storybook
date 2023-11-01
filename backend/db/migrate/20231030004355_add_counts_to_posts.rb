class AddCountsToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :likes_count, :integer, default: 0
    add_column :posts, :reposts_count, :integer, default: 0
    add_column :posts, :quote_reposts_count, :integer, default: 0
    add_column :posts, :bookmarks_count, :integer, default: 0
    add_column :posts, :replies_count, :integer, default: 0
  end
end
