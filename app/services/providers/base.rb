class Providers::Base
  require 'open-uri'
  include Virtus.model

  GSMARENA_PROVIDER = 'Gsmarena'
  AVAILABLE_PROVIDERS = [GSMARENA_PROVIDER]

  def search(query: nil)
    raise 'Not implemented yet'
  end

  def get(id: nil)
    raise 'Not implemented yet'
  end
end
