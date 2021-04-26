class HeroFight < ApplicationRecord
  belongs_to :fight
  belongs_to :hero
end
