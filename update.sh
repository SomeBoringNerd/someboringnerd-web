#!/bin/bash

previous="$(git rev-parse --short HEAD)"

# reset any temp changes I could have made in prod
git reset --hard

# get my changes from github
git pull

now="$(git rev-parse --short HEAD)"

# we should restart the server
if [ "$previous" != "$now" ]; then
	# actualize my node_modules folder
	npm i

	# build the project
	npm run build

	# restart my website
	systemctl restart website.service
else
	echo "nothing changed, no need to restart the server"
fi
chmod +x update.sh