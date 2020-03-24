#!/bin/bash

tsc "$1.ts"
node "$1.js"
rm "$1.js"
