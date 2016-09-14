class Providers::Base
  require 'open-uri'
  include Virtus.model

  attribute :query, String
  attribute :phones, Array, writer: :private
end
