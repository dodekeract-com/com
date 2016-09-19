#!/bin/bash

# build docker

docker build -t dodekeract/com ../

# copy nginx

cp nginx.conf /srv/docker/nginx/sites-enabled/dodekeract.com

# restart nginx

docker restart nginx
