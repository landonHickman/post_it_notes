class PagesController < ApplicationController

  def index
    @pages = Page.all
    render component: "Pages", props:{pages:@pages}
  end

  def show
    @page = Page.find(params[:id])
    render component: "Page", props:{page: @page}
  end





end