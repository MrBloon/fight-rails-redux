class Equipment < ApplicationRecord
  has_many :fight_equipments
  has_many :fights, through: :fight_equipments
  belongs_to :user
  validates :name, presence: true
  validates :description, presence: true
  validates :equipment_type, presence: true
end
