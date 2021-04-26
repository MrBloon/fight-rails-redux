class AddDefaultToHeroFoe < ActiveRecord::Migration[6.1]
  def change
    change_column_default :heros, :foe, false
  end
end
