class PhonesController < ApplicationController
  respond_to :json

  def index
    @phones = PhonesService.new(
      provider: 'Gsmarena'
    ).search(query: index_search_params[:query])

    respond_with @phones
  end
end
