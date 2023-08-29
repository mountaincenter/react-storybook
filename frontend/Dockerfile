FROM node:18.16.0

RUN npm install -g npm@latest tree

RUN apt-get update && apt-get install -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb

RUN yarn global add serve vite

# RUN yarn add cypress --dev

RUN npx playwright install

RUN npx playwright install-deps

# WORKDIR /usr/src/app
WORKDIR /usr/src/app/react-app

RUN yarn install
