#!/bin/bash
set -ex

yarn run lint
yarn test

./generate.sh
MODIFIED_FILES=$(git diff --name-only)
if [[ -n $MODIFIED_FILES ]]; then
  echo "ERROR: Changes detected in generated code, please run './generate.sh' and check-in the changes."
  exit 1
fi

bazel build //...:all