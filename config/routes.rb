Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'



  get "heros/new", to: 'api/v1/heros#new'
  get "fights/new", to: 'api/v1/fights#new'
  get "fights/:id", to: 'api/v1/fights#show'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :fights, only: [:show, :update]
      resources :heros, only: [:index, :create]
    end
  end

end
