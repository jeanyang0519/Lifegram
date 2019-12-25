class Api::PostsController < ApplicationController

    def index 
        @posts = Post.all
        @likes = Like.all 
        @comments =  Comment.all 
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        # debugger
        if @post.save
            
            render :show
        else
            render json: @post.errors.full_messages, status: 422 
        end 
    end

    def show
        @post = Post.find(params[:id])
        render "api/posts/show"
    end

    def update 
        @post = Post.find(params[:id])
        if @post.update(post_params)
          render "api/posts/show" 
        else
          render json: @post.errors.full_messages, status: 422
        end
    end 

    def destroy
        @post = current_user.posts.find(params[:id])
        if @post.destroy
            render "api/posts/show"
        else
            render json: ["Something went wrong"], status: 404
        end 
       
    end

    private
    def post_params
        params.require(:post).permit(:body, :author_id, :photo, :location)
    end

  
end 