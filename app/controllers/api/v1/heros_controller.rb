class Api::V1::HerosController < ApplicationController
  def index
    @heros = Hero.all
    render json: @heros
  end

  def create
    @hero = Hero.new(hero_params)
    @hero.user = current_user
    @hero.save!
    render json: @hero
  end

  private

  def hero_params
    params.require(:hero).permit(:name, :hero_class)
  end

end
