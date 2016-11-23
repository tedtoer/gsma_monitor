class Providers::Base
  require 'open-uri'
  include Virtus.model

  def search(query: nil)
    raise 'Not implemented yet'
  end

  def get(id: nil)
    raise 'Not implemented yet'
  end
end
