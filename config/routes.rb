Rails.application.routes.draw do
  root 'main#index'
  get 'phones', to: 'phones#index'
  get 'phones/:id_external', to: 'phones#show'
end
