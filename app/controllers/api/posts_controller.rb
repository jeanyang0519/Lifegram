class Api::PostsController < ApplicationController

    def create
        Post.create(post_params)
        # redirect_to 

        #redirect_to the homepage
    end

    private
    def post_params
        params.require(:post).permit(:body, :author_id, :photo, :location)
    end
end 