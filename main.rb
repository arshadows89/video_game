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

get '/pre_order' do
	erb :pre_order
end

post '/contact' do
	# puts "my params are: " + params.inspect
	contact_name = params['name']
	contact_email = params['email']
	email_body= "We received your pre-order"
	m = Mandrill::API.new
	message = {  
	 :subject=> "Thnak you for your pre-order",  
	 :from_name=> "GAMECOCK",  
	 :text=> email_body,
	 :to=>[  
	   {  
	     :email=> contact_email,  
	     :name=> contact_name  
	   }  
	 ],  
	 :html=>"<html><h1><strong>#{email_body}</strong></h1></html>",  
	 :from_email=>"Cameron@dooffy.com"  
	}  
	sending = m.messages.send message  
	puts sending
	redirect to('/thanks')
end

 get '/thanks' do
 	erb :thanks
 end