FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]

COPY . /usr/src/app
RUN npm run build
