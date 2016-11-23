class PhonesService
  include Virtus.model

  attribute :provider, String

  def search(query: nil)
    provider_service.search(query: query)
  end

  def get(id: nil)
    provider_service.get(id: id)
  end

  private

  def provider_service
    @provider_service ||= Object.const_get("Providers::#{provider}").new
  end
end
