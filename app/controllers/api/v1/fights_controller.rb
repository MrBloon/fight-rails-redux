class Api::V1::FightsController < ApplicationController
  skip_before_action :authenticate_user!, only: :show

  def show
    @fight = Fight.find(params[:id])
    @hero = @fight.heros.first
    @foe = Hero.find_by(name: "Foe")
    render json: @hero
  end
end
