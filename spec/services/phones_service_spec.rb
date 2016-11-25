require 'rails_helper'

describe PhonesService do
  subject { PhonesService.new(provider: Providers::Base::GSMARENA_PROVIDER) }

  context '#search' do
    it 'returns empty array for no query passed' do
      expect(subject.search).to eq([])
    end

    it 'returns phones array for query passed' do
      gsmarena_search_stub
      expect(subject.search(query: 'xiaomi mi4')).to eq(gsmarena_search_phones)
    end
  end

  context '#get' do
    it 'returns empty hash for no id passed' do
      expect(subject.get).to eq({})
    end

    it 'returns phone hash for id passed' do
      gsmarena_get_stub
      expect(subject.get(id: 'xiaomi_mi_4c-7512')).to eq(gsmarena_get_phone)
    end
  end

  context 'provider not passed' do
    subject { PhonesService.new }

    it '#get raise error' do
      expect { subject.get }.to raise_error(PhonesService::NoProviderError)
    end

    it '#search raise error' do
      expect { subject.search }.to raise_error(PhonesService::NoProviderError)
    end
  end
end
