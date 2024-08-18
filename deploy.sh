#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'kingbcats.js.org' > CNAME

git init
git add -A
git commit -m 'deploy'

cd -