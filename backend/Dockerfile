FROM ruby:3.2.2
ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev graphviz npm vim curl

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn

RUN yarn add -D prettier @prettier/plugin-ruby

ENV APP_PATH /sample

RUN mkdir $APP_PATH
WORKDIR $APP_PATH

ADD Gemfile $APP_PATH/Gemfile
ADD Gemfile.lock $APP_PATH/Gemfile.lock

RUN gem install bundler
RUN bundle install

ADD . $APP_PATH

RUN mkdir -p tmp/sockets
