class FollowingsController < ApplicationController
  def index
    @follows = Follow.all
  end

  def show
    @follow = Follow.find(params[:id])
    render :show
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id  
    
    if @follow.save 
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    
    if @follow.destroy 
      render :index
    else
      render json: ["Something went wrong"], status: 404
    end
  end

  private
  def following_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
