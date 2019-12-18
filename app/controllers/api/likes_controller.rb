class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render :index
  end

  def show
    @like = Like.find(params[:id])
    render :show
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id  
# debugger
    if @like.save 
      render :show 
    else
      render json: @like.errors.full_messages, status: 422
    end 
  end

  def destroy
    @like = Like.find(params[:id])
    # debugger
        if @like.destroy && @like.user_id === current_user.id
            render :index 
        else
            render json: ["Something went wrong"], status: 404
        end 
  end

  private 

  def like_params
    params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
  end 
end


