Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'



  get "heros/new", to: 'api/v1/heros#new'
  get "equipments", to: 'api/v1/equipments#index'
  get "fights/new", to: 'api/v1/fights#new'
  get "fights/:id", to: 'api/v1/fights#show'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :fights, only: [:show, :update]
      resources :heros, only: [:index, :create]
      resources :equipments, only: [:index, :create]
      patch "equipments", to: 'equipments#update'
    end
  end

end
