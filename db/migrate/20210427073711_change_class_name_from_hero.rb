class ChangeClassNameFromHero < ActiveRecord::Migration[6.1]
  def change
    rename_column :heros, :class, :hero_class
  end
end
