Rails.application.routes.draw do
  root 'main#index'
  get 'phones', to: 'phones#index'
end
