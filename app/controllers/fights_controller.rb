class FightsController < ApplicationController
  def show
    @fight = Fight.find(params[:id])
    @hero = @fight.heros.first
    @foe = Hero.find_by(name: "Foe")
  end
end
