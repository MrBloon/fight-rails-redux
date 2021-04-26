class CreateFightEquipments < ActiveRecord::Migration[6.1]
  def change
    create_table :fight_equipments do |t|
      t.references :equipment, null: false, foreign_key: true
      t.references :fight, null: false, foreign_key: true

      t.timestamps
    end
  end
end
