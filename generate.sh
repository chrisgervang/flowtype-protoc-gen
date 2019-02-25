#!/bin/bash -x
# Generate typescript definitions and service definitions from proto files

set +e

EXAMPLES_GENERATED_DIR=examples/generated
EXAMPLES_FLOW_GENERATED_DIR=examples/flow/generated

# Determine which platform we're running on
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     platform=Linux;;
    Darwin*)    platform=Mac;;
    *)          platform="UNKNOWN:${unameOut}"
esac
echo "You appear to be running on ${platform}"

# Installing yarn
requiredYarnVersion="$(node -p "require('./package.json').engines.yarn")"
if [[ "${requiredYarnVersion}" != "$(yarn --version)" ]]; then
    echo "Installing yarn@${requiredYarnVersion}"
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version ${requiredYarnVersion}
fi
if [[ "$(which yarn)" == "" ]]; then
    echo "Please follow instructions to setting path for ${requiredYarnVersion}"
    export PATH="$HOME/.yarn/bin:$PATH"
fi


echo "Ensuring we have Npm packages installed..."
yarn

echo "Compiling ts-protoc-gen..."
yarn build

PROTOC_VERSION="3.5.1"
echo "Downloading protoc v${PROTOC_VERSION} for ${platform}..."
mkdir -p protoc
if [[ $platform == 'Linux' ]]; then
    PROTOC_URL="https://github.com/google/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip"
elif [[ $platform == 'Mac' ]]; then
    PROTOC_URL="https://github.com/google/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-osx-x86_64.zip"
else
    echo "Cannot download protoc. ${platform} is not currently supported by ts-protoc-gen"
    exit 1
fi

curl -sSL ${PROTOC_URL} -o "protoc-${PROTOC_VERSION}.zip"
unzip "protoc-${PROTOC_VERSION}.zip" -d protoc
rm "protoc-${PROTOC_VERSION}.zip"

PROTOC=./protoc/bin/protoc

echo "Generating proto definitions..."

if [ -d "$EXAMPLES_GENERATED_DIR" ]
then
    rm -rf "$EXAMPLES_GENERATED_DIR"
fi
mkdir -p "$EXAMPLES_GENERATED_DIR"

$PROTOC \
  --plugin=protoc-gen-flow=./bin/protoc-gen-flow \
  --js_out=import_style=commonjs,binary:$EXAMPLES_GENERATED_DIR \
  --flow_out=ts=true,service=true:$EXAMPLES_GENERATED_DIR \
  ./proto/othercom/*.proto \
  ./proto/examplecom/*.proto \
  ./proto/*.proto

if [ -d "$EXAMPLES_FLOW_GENERATED_DIR" ]
then
    rm -rf "$EXAMPLES_FLOW_GENERATED_DIR"
fi
mkdir -p "$EXAMPLES_FLOW_GENERATED_DIR"

$PROTOC \
  --plugin=protoc-gen-flow=./bin/protoc-gen-flow \
  --js_out=import_style=commonjs,binary:$EXAMPLES_FLOW_GENERATED_DIR \
  --flow_out=$EXAMPLES_FLOW_GENERATED_DIR \
  ./proto/othercom/*.proto \
  ./proto/examplecom/*.proto \
  ./proto/*.proto

# Cleanup downloaded proto directory
rm -r protoc
