##!/bin/bash

SERVER_IP=$SERVER_IP
SERVER_FOLDER="dev0.dequity.io"

yarn install --force

yarn run build

echo "Deploying to ${SERVER_FOLDER}"

ssh gitlab@${SERVER_IP} "rm -rf /var/www/${SERVER_FOLDER}/*"

scp -r /builds/dequity/dEquityLanding/* gitlab@${SERVER_IP}:/var/www/${SERVER_FOLDER}

echo "Finished copying files"

ssh gitlab@${SERVER_IP} "cd /var/www/${SERVER_FOLDER} ; /home/gitlab/node_modules/pm2/bin/pm2 stop 'yarn run web'"

echo "Stop pm2"

ssh gitlab@${SERVER_IP} "cd /var/www/${SERVER_FOLDER} ; rm -R node_modules && rm -R .next && rm package-lock.json && rm yarn.lock && yarn install && yarn run build"

echo "Install packages and build project"

ssh gitlab@${SERVER_IP} "cd /var/www/${SERVER_FOLDER} ; /home/gitlab/node_modules/pm2/bin/pm2 start 'yarn run web'"

echo "Start pm2"
