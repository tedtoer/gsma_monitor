class PhonesController < ApplicationController
  def index
    @phones = PhonesService.new(
      provider: 'Gsmarena'
    ).search(query: params[:query])

    render json: { data: @phones }
  end
end
