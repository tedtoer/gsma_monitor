require 'rails_helper'

describe PhonesController do
  context 'GET index' do
    it "returns a successful 200 response" do
      get :index
      expect(response).to be_success
    end

    it "returns 5 phones by query" do
      gsmarena_search_stub
      get :index, params: { query: 'xiaomi mi4' }
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['data'].length).to eq(5)
    end
  end

  context 'GET show' do
    before do
      gsmarena_get_stub
      get :show, params: { id_external: 'xiaomi_mi_4c-7512' }
    end

    it "returns a successful 200 response" do
      expect(response).to be_success
    end

    it "returns phone info by external id" do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['data']).to include_json(gsmarena_get_phone)
    end
  end
end
