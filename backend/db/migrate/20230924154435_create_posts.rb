class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts, charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci' do |t|
      t.text :content
      t.json :images
      t.bigint :user_id, null: false
      t.bigint :parent_id
      t.string :public_id
      t.string :post_type, default: 'original'
      t.integer :original_id

      t.timestamps
    end

    add_index :posts, :original_id, name: 'index_posts_on_original_id'
    add_index :posts, :parent_id, name: 'fk_rails_3eb11ec3aa'
    add_index :posts, :public_id, name: 'index_posts_on_public_id', unique: true
    add_index :posts, :user_id, name: 'index_posts_on_user_id'
  end
end