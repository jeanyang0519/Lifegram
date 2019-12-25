class Api::UsersController < ApplicationController
  def index
    @users = User.all 
   
    render :index
  end 
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show 
    # debugger
    @user = User.find(params[:id])
    @posts = @user.posts
    render :show
  end

  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :name, :bio)
  end
end
