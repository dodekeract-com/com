#!/bin/bash

docker run \
	--name dodekeract.com \
	-p 45000:45000 \
	-it \
	-d dodekeract/com
