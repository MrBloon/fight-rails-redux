Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :fights, only: [:show]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :fights, only: [ :show]
    end
  end

end
