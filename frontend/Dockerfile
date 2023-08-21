FROM node:18.16.0

RUN npm install -g npm@latest tree

RUN yarn global add serve vite

RUN npx playwright install

RUN npx playwright install-deps

# WORKDIR /usr/src/app
WORKDIR /usr/src/app/react-app

RUN yarn install
