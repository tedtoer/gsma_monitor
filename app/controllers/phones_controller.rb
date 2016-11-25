class PhonesController < ApplicationController
  def index
    @phones = PhonesService.new(
      provider: 'Gsmarena'
    ).search(query: params[:query])

    render json: { data: @phones }
  end

  def show
    @phone = PhonesService.new(
      provider: 'Gsmarena'
    ).get(id: params[:id_external])

    render json: { data: @phone }
  end
end
