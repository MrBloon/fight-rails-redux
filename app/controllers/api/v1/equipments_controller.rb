class Api::V1::EquipmentsController < ApplicationController
  def index
    @gold = current_user.gold
    @equipments = Equipment.all
    respond_to do |format|
      format.html
      format.json { render json: [@equipments, @gold] }
    end
  end

  def create
    @equipment = Equipment.new(equipment_params)
    @equipment.user = current_user
    @equipment.save!
    render json: @equipment
  end

  def update
    current_user.update(gold: params[:newGoldAmount])
    @gold = current_user.gold
    render json: @gold
  end

  private

  def equipment_params
    params.require(:equipment).permit(:name, :description, :user, :quantity)
  end
end
