class Api::CommentsController < ApplicationController
  def index  
    @comments = Comment.all 
  end

  def show 
    @comment = Comment.find(params[:id])
    render :show 
  end
  
  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
    
  end

  def destroy 
    @comment = Comment.find(params[:id])
    if @comment.destroy 
      render :index
    else 
      render json: ['Something went wrong'], status: 404
    end 

  end

  private 

  def comment_params
    params.require(:comment).permit(:comment_body, :post_id, :user_id)
  end
end
