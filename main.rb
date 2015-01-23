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
  email_body = "We've received your payment"
  m = Mandrill::API.new

  sending = m.messages.send message  
  puts sending
  redirect to('/thanks')
end

 get '/thanks' do
 	erb :thanks
 end