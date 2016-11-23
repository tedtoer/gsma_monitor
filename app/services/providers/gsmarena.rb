class Providers::Gsmarena < Providers::Base
  def search(query: nil)
    search_url = base_url_for_query + "/results.php3?sName=#{URI.encode(query)}"
    doc = Nokogiri::HTML(open(search_url))
    phones = doc.css('#review-body .makers ul li')
    phones.map do |phone|
      {
        title: phone.content,
        id: phone.css('a').first.attribute('href').value[0..-5],
        image_url: phone.css('img').first.attribute('src').value
      }
    end
  end

  def get(id: nil)
    get_url = base_url_for_query + "/#{id}.php"
    Nokogiri::HTML(open(get_url))
  end

  private

  def base_url_for_query
    'http://www.gsmarena.com'
  end
end
