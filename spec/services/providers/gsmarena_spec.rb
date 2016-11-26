require 'rails_helper'

describe Providers::Gsmarena do
  subject { Providers::Gsmarena.new }

  context '#get for phone, where img-element not in a-element' do
    # some phones has this struct of main image:
    # <a href ... ><img ... /></a>
    # but some this:
    # <img ... />
    #
    # for example:
    # phone w/o link on image: http://www.gsmarena.com/xiaomi_mi_mix_nano-8439.php
    # phone w/ link on image: http://www.gsmarena.com/xiaomi_redmi_note_3-7863.php

    it 'returns phone info w/o errors' do
      gsmarena_get_not_link_img_stub
      expect(
        subject.get(id: 'xiaomi_mi_mix_nano-8439')
      ).to eq(gsmarena_get_not_link_img_phone)
    end
  end
end
