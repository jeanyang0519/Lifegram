Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:new, :create, :show, :destroy, :index, :update]
    resources :comments, only: [:index, :create, :show, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :followings, only: [:show, :index, :create, :destroy]
  end 

  root "static_pages#root"
end
