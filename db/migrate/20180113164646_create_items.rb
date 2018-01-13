class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :type
      t.string :name
      t.text :excerpt
      t.text :description
      t.string :url
      t.integer :upvotes

      t.timestamps
    end
  end
end
