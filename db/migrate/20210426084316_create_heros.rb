class CreateHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :heros do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.integer :hit_points
      t.boolean :foe

      t.timestamps
    end
  end
end
