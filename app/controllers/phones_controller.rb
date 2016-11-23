class PhonesController < ApplicationController
  respond_to :json

  def index
    @phones = PhonesService.new(
      provider: 'Gsmarena'
    ).search(query: params[:query])

    respond_with @phones
  end
end
