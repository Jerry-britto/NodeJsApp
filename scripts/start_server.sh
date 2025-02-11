#!/bin/bash

echo "starting node server"

sudo chmod -R 777 /home/ubuntu/app

cd /home/ubuntu/app

export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  

npm install

node start > index.out.log 2> index.err.log < /dev/null & 

echo "server is running"