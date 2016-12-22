#!/usr/bin/env bash

set -e

if [[ $* == *--production* ]]; then
    ./node_modules/.bin/node-sass --output public/css --output-style compressed src/styles.scss
elif [[ $* == *--watch* ]]; then
    ./node_modules/.bin/node-sass --output public/css --watch --recursive --source-map true src/styles.scss
else
    ./node_modules/.bin/node-sass --output public/css src/styles.scss
fi
