class PhonesController < ApplicationController
  respond_to :json

  def index
    @phones = PhonesParser.new(
      provider: Providers::Gsmarena,
      query: index_search_params[:query]
    ).parse

    respond_with @phones
  end
end
