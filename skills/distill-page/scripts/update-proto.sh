#!/bin/bash
set -e

echo "Downloading common_quality_data.proto..."
curl -sS -o utils/proto/common_quality_data.proto "https://raw.githubusercontent.com/chromium/chromium/main/components/optimization_guide/proto/features/common_quality_data.proto"

echo "Compiling proto to JS..."
npx -y -p protobufjs-cli pbjs -t static-module -w es6 --es6 -o utils/common_quality_data_pbjs.js utils/proto/common_quality_data.proto

echo "Fixing ESM import for Node.js..."
sed -i '' 's/from "protobufjs\/minimal"/from "protobufjs\/minimal.js"/g' utils/common_quality_data_pbjs.js

echo "Successfully updated and compiled proto!"
