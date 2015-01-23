require 'sinatra'
require 'mandrill'

get '/' do
    erb :home
end
get '/story' do
	erb :story
end
get '/classes' do
	erb :classes
end

