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

# clone

RUN mkdir -p build/client/projects

RUN git clone --depth=1 --branch=master https://github.com/dodekeract/particles.git build/client/projects/particles
RUN rm -rf !$/.git

RUN git clone --depth=1 --branch=master https://github.com/dodekeract/mandelbrot.git build/client/projects/mandelbrot
RUN rm -rf !$/.git

RUN git clone --depth=1 --branch=master https://github.com/dodekeract/line-replace-fractals.git build/client/projects/line-replace-fractals
RUN rm -rf !$/.git

RUN git clone --depth=1 --branch=master https://github.com/dodekeract/spirograph.git build/client/projects/spirograph
RUN rm -rf !$/.git

RUN git clone --depth=1 --branch=master https://github.com/dodekeract/spot-the-difference.git build/client/projects/spot-the-difference
RUN rm -rf !$/.git

# finalize

EXPOSE 45000

CMD [ "npm", "start" ]
