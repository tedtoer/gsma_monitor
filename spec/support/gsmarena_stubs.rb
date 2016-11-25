module GsmarenaStubs
  def gsmarena_search_stub
    stub_request(
      :get, 'http://www.gsmarena.com/results.php3?sName=xiaomi%20mi4'
    ).with(
      headers: {
        'Accept'=>'*/*',
        'Accept-Encoding'=>'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
        'User-Agent'=>'Ruby'
      }
    ).to_return(
      status: 200,
      body: file_fixture('gsmarena_search_stub.html'),
      headers: {}
    )
  end

  def gsmarena_get_stub
    stub_request(
      :get, 'http://www.gsmarena.com/xiaomi_mi_4c-7512.php'
    ).with(
      headers: {
        'Accept'=>'*/*',
        'Accept-Encoding'=>'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
        'User-Agent'=>'Ruby'
      }
    ).to_return(
      status: 200,
      body: file_fixture('gsmarena_get_stub.html'),
      headers: {}
    )
  end

  def gsmarena_search_phones
    [
      {
        img_url: "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4.jpg",
        title: "Xiaomi Mi 4",
        id: "xiaomi_mi_4-6518"
      },
      {
        img_url: "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4c.jpg",
        title: "Xiaomi Mi 4c",
        id: "xiaomi_mi_4c-7512"
      },
      {
        img_url: "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi4i.jpg",
        title: "Xiaomi Mi 4i",
        id: "xiaomi_mi_4i-7211"
      },
      {
        img_url: "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4s.jpg",
        title: "Xiaomi Mi 4s",
        id: "xiaomi_mi_4s-7962"
      },
      {
        img_url: "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4-lte.jpg",
        title: "Xiaomi Mi 4 LTE",
        id: "xiaomi_mi_4_lte-6866"
      }
     ]
  end

  def gsmarena_get_phone
    {
      battery_bulk: '3080mAh',
      battery_type: 'Li-Ion',
      camera_photo: '13MP',
      camera_video: '1080p',
      cpu: 'Snapdragon 808',
      display_resolution: '1080x1920',
      display_size: '5.0',
      image_url: 'http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4c.jpg',
      ram: '3GB RAM',
      title: 'Xiaomi Mi 4c'
    }
  end
end
