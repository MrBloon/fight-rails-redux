class AddTypeToEquipment < ActiveRecord::Migration[6.1]
  def change
    add_column :equipment, :type, :string
  end
end
