class AddLevelAndClassToHero < ActiveRecord::Migration[6.1]
  def change
    add_column :heros, :level, :integer, default: 1
    add_column :heros, :class, :string
  end
end
