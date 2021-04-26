class AddDefaultToHeroHitPoints < ActiveRecord::Migration[6.1]
  def change
    change_column_default :heros, :hit_points, 10
  end
end
