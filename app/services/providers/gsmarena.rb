class Providers::Gsmarena < Providers::Base
  def search(query: nil)
    search_url = base_url_for_query + "/results.php3?sName=#{URI.encode(query)}"
    doc = Nokogiri::HTML(open(search_url))
    phones = doc.css('#review-body .makers ul li')
    phones.map do |phone|
      title_node = phone.css('strong span').first
      title = [title_node.children[0], title_node.children[2]].join(' ')
      img_url = phone.css('img').first.attribute('src').value
      {
        img_url: img_url,
        title: title,
        id: phone.css('a').first.attribute('href').value[0..-5]
      }
    end
  end

  def get(id: nil)
    get_url = base_url_for_query + "/#{id}.php"
    doc = Nokogiri::HTML(open(get_url))
    title = doc.css('.specs-phone-name-title').first.text
    phone = doc.css('.center-stage').first
    specs = phone.css('.specs-spotlight-features').first
    display_spec = specs.css('li.help.accented.help-display').first
    camera_spec = specs.css('li.help.accented.help-camera').first
    expansion_spec = specs.css('li.help.accented.help-expansion').first
    battery_spec = specs.css('li.help.accented.help-battery').first

    {
      title: title,
      image_url: phone.css('.specs-photo-main a img').first.attribute('src').value,
      display_size: display_spec.children[3].content[0..-2],
      display_resolution: display_spec.children[4].content.split(' ')[0],
      camera_photo: camera_spec.children[3].content.strip,
      camera_video: camera_spec.children[4].content.strip,
      ram: expansion_spec.children[3].content.strip,
      cpu: expansion_spec.children[4].content.strip,
      battery_bulk: battery_spec.children[3].content.strip,
      battery_type: battery_spec.children[4].content.strip
    }
  end

  private

  def base_url_for_query
    'http://www.gsmarena.com'
  end
end
