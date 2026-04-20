#!/bin/bash
set -e

# Always run relative to the script's directory
cd "$(dirname "$0")"

mkdir -p proto

echo "Downloading common_quality_data.proto..."
curl -sS -o proto/common_quality_data.proto "https://raw.githubusercontent.com/chromium/chromium/main/components/optimization_guide/proto/features/common_quality_data.proto"

echo "Compiling proto to JS..."
npx -y -p protobufjs-cli pbjs --target static-module --wrap es6 --es6 --alt-comment --no-delimited --no-encode --no-verify --no-create --no-convert --no-service --no-typeurl --null-defaults --force-number -o proto/common_quality_data_pbjs.js proto/common_quality_data.proto

echo "Generating TypeScript definitions (.d.ts)..."
npx -y -p protobufjs-cli pbts -o proto/common_quality_data_pbjs.d.ts proto/common_quality_data_pbjs.js

echo "Fixing ESM import for Node.js..."
sed -i.bak 's/from "protobufjs\/minimal"/from "protobufjs\/minimal.js"/g' proto/common_quality_data_pbjs.js
rm proto/common_quality_data_pbjs.js.bak

echo "Adding // @ts-nocheck to top of pbjs file..."
echo "// @ts-nocheck" | cat - proto/common_quality_data_pbjs.js > temp.js && mv temp.js proto/common_quality_data_pbjs.js

echo "Successfully updated and compiled proto!"
