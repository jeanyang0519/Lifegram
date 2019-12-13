class LikesController < ApplicationController
  def index
    @likes = Like.All 
  end

  def show
    @like = Like.find(params[:id])
    render :show
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id  

    if @like.save 
      render :show 
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])
        if @like.destroy
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
