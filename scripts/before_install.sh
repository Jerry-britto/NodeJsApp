#!/bin/bash

echo "Installing node js"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

mkdir -p /home/ubuntu/app

echo "done with installation"