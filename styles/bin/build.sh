#!/usr/bin/env bash

set -e

flags="src/styles.scss"

if [[ $* == *--production* ]]; then
    flags="--output-style compressed src/styles.scss"
elif [[ $* == *--watch* ]]; then
    flags="--watch --recursive --source-map true src/styles.scss"
fi

./node_modules/.bin/node-sass                        \
    --output public/css                              \
    --importer=node_modules/node-sass-tilde-importer \
    ${flags}
