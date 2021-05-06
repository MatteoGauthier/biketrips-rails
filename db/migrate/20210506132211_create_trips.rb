class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.float :distance
      t.integer :likes
      t.references :author, null: false, foreign_key: true
      t.jsonb :path

      t.timestamps
    end
  end
end
