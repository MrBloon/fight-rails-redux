class Api::V1::HerosController < ApplicationController
  def index
    @heros = Hero.all
    render json: @heros
  end

  def create
    # @hero = Hero.create(hero_params)
    # render json: @hero
    @hero = Hero.create(name:params[:name], hero_class:params[:classtype], user: current_user)
    render json: @hero
  end

  private

  # def hero_params
  #   params.require(:hero).permit(:name, :hero_class, :)
  # end

end
