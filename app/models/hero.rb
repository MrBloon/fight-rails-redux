class Hero < ApplicationRecord
  has_many :hero_fights
  has_many :fights, through: :hero_fights
  belongs_to :user
  validates :name, presence: true, uniqueness: true
  validates :hero_class, presence: true
  validates :class, presence: true
  validates :hit_points, presence: true
end
