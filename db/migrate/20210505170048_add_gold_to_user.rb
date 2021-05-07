class AddGoldToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :gold, :integer, default: 0
  end
end
