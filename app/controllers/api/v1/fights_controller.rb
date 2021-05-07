class Api::V1::FightsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :update]
  before_action :set_fight, only: [:show, :update]

  def new
    @fight = Fight.new
  end

  def show
    @foe = Hero.find_by(name: "Foe")

    respond_to do |format|
      format.html
      format.json { render json: @hero }
    end
  end

  def update
    @hero.update(experience: params[:newExperience])
    render json: @hero
  end

  private

  def set_fight
    @fight = Fight.find(params[:id])
    @hero = @fight.heros.first
  end
end
