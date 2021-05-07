class AddQuantityAndDescriptionToEquipment < ActiveRecord::Migration[6.1]
  def change
    add_column :equipment, :quantity, :integer, default: 0
    add_column :equipment, :description, :string
  end
end
