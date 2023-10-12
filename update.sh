#!/bin/bash

# reset any temp changes I could have made in prod
git reset --hard

# get my changes from github
git pull

# actualize my node_modules folder
npm i

# build the project
npm run build

# restart my website
systemctl restart website.service

chmod +x update.sh