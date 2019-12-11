class Api::PostsController < ApplicationController

    def index 
        @posts = Post.all 
        render "api/posts/index"
    end

    def create
        @post = Post.create(post_params)
        
        if @post.save
            render "api/posts/index"
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
            json: ["Something went wrong"], status: 404
        end 
        # render to user's profile
        # redirect_to user_path(current_user)
    end

    private
    def post_params
        params.require(:post).permit(:body, :author_id, :photo, :location)
    end
end 