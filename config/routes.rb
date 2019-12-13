Rails.application.routes.draw do
  get 'likes/index'
  get 'likes/show'
  get 'likes/create'
  get 'likes/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:new, :create, :show, :destroy, :index, :update]
  end 

  root "static_pages#root"
end
