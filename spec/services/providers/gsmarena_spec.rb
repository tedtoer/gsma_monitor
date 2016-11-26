require 'rails_helper'

describe Providers::Gsmarena do
  subject { Providers::Gsmarena.new }

  context '#get for phone, where img-element not in a-element' do
    it 'returns phone info w/o errors' do
      gsmarena_get_not_link_img_stub
      expect(
        subject.get(id: 'xiaomi_mi_mix_nano-8439')
      ).to eq(gsmarena_get_not_link_img_phone)
    end
  end
end
