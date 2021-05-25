class Api::V1::FightsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :update]
  before_action :set_fight, only: [:show, :update]

  def index
    @fights = Fight.all
    render json: @fights
  end

  def hall
    @player_heros = Hero.where(foe: false)
    @equipments = Equipment.all
    @foes = Hero.where(foe: true)
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @hero }
    end
  end

  def create
    @fight = Fight.create
    render json: @fight
  end

  def update
    @hero.update(experience: params[:newExperience])
    render json: @hero
  end

  private

  def set_fight
    @fight = Fight.find(params[:id])
  end
end
