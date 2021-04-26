class Equipment < ApplicationRecord
  has_many :fight_equipments
  has_many :fights, through: :fight_equipments
end
