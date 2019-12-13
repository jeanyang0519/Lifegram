Rails.application.routes.draw do
  get 'followings/index'
  get 'followings/show'
  get 'followings/create'
  get 'followings/destroy'
  get 'followings/following_params'
  get 'comments/index'
  get 'comments/show'
  get 'comments/create'
  get 'comments/destroy'
  get 'comments/comment_params'
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
