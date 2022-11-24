#!/bin/bash

npx esbuild src/run.ts --bundle --outdir=dist --format=cjs --platform=node --target=es2020

npm run commit

npm version patch

npm publish
