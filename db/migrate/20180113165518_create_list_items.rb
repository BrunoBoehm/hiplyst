class CreateListItems < ActiveRecord::Migration[5.1]
  def change
    create_table :list_items do |t|
      t.references :list, foreign_key: true
      t.references :item, foreign_key: true
      t.text :description
      t.integer :position

      t.timestamps
    end
  end
end
