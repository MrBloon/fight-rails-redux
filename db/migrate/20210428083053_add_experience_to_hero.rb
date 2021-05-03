class AddExperienceToHero < ActiveRecord::Migration[6.1]
  def change
    add_column :heros, :experience, :integer, default: 0
  end
end
