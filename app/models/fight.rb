class Fight < ApplicationRecord
  has_many :hero_fights, dependent: :destroy
  has_many :heros, through: :hero_fights

  has_many :fight_equipments, dependent: :destroy
  has_many :equipments, through: :fight_equipments
end
