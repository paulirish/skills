#!/usr/bin/env bash

# Creates proto/ directory if it doesn't exist
mkdir -p proto

# Downloads the latest common_quality_data.proto from Chromium Main
curl -o proto/common_quality_data.proto "https://raw.githubusercontent.com/chromium/chromium/main/components/optimization_guide/proto/features/common_quality_data.proto"

# Compiles the .proto file into a JS module
npx -y -p protobufjs-cli pbjs -t static-module -w es6 --es6 -o proto/common_quality_data_pbjs.js proto/common_quality_data.proto

# Fixes the esoteric ES-module import error by ensuring it explicitly resolves a default export from the node module
sed -i.bak 's/import \* as $protobuf from "protobufjs\/minimal.js";/import $protobuf from "protobufjs\/minimal.js";/g' proto/common_quality_data_pbjs.js
rm proto/common_quality_data_pbjs.js.bak

# Generates the Typescript declarations
npx -y -p protobufjs-cli pbts -o proto/common_quality_data_pbjs.d.ts proto/common_quality_data_pbjs.js

echo "Successfully updated and compiled proto files."
