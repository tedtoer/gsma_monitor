class PhonesParser
  include Virtus.model

  attribute :provider
  attribute :query, String

  def parse
    provider.new(query: query).phones
  end
end
