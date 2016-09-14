class Providers::Gsmarena < Providers::Base
  def phones
    Nokogiri::HTML(open(url_for_query))
  end

  private

  def url_for_query
    "http://www.gsmarena.com/results.php3?sName=#{URI.encode(query)}"
  end
end
