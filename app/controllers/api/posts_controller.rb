class Api::PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
  end
end
