#!/bin/bash

# ====

STACK=$1
ADDONS=$2
APP_NAME=$3

# ====

split() {
    local string="$1"
    local delimiter="$2"

    if [ -n "$string" ]; then
        local lib
        while read -d "$delimiter" lib; do
            # echo $lib
            npm install --save-dev $lib
        done <<< "$string"
            # echo $lib
            npm install --save-dev $lib
    fi
}

# ====

echo "Cloning the React Create APP."
npx create-react-app $APP_NAME

echo "Installing the libraries."
split $STACK ','

echo "Installing all the add-ons."
split $ADDONS ','
