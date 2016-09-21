# inherit node

FROM node:argon

# create working directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy

COPY package.json /usr/src/app/
COPY source /usr/src/app/source

# install

RUN npm install --silent

# build

RUN npm run build --silent

# finalize

EXPOSE 45000

CMD [ "npm", "start" ]
