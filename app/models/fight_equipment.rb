class FightEquipment < ApplicationRecord
  belongs_to :equipment
  belongs_to :fight
end
