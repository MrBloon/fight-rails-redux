class CreateHeroFights < ActiveRecord::Migration[6.1]
  def change
    create_table :hero_fights do |t|
      t.references :fight, null: false, foreign_key: true
      t.references :hero, null: false, foreign_key: true

      t.timestamps
    end
  end
end
