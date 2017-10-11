FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

EXPOSE 8080

CMD ["yarn", "run", "start"]

COPY . /usr/src/app
RUN yarn run build
