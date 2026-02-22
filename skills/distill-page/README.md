# Page Distiller Script (`distill-page.js`)

This script is a standalone tool designed to extract distilled webpage content using the Chrome DevTools Protocol (CDP). It leverages Experimental features in Chromium to annotate and distill page content.

## 🚀 Usage

```bash
./distill-page.js <URL>
```

The script outputs a base64 binary-encoded string, which is a serialized protobuf containing the distilled page data.

## 🛠️ Implementation Details

### Core Mechanism
The script uses **Playwright** to launch Chromium and establish a direct **CDP Session** to a specific page. It then invokes the experimental `Page.getAnnotatedPageContent` method.

### Required Configuration
Through testing, a specific set of requirements was identified to avoid the common `Failed to get annotated page content` protocol error:

1.  **Headful Mode Only**: Currently, the `Optimization Guide` features required for this method do not appear to be reliable or active in Headless mode. The script must be run with `headless: false`.
2.  **Chromium Feature Flags**: Several flags must be enabled during browser launch:
    *   `--enable-dom-distiller`
    *   `--enable-features=OptimizationHints,PageContentAnnotation,OptimizationGuideModelDownloading`
3.  **CDP Domain Enablement**: The `Page` domain must be explicitly enabled (`Page.enable`) before calling the distillation method.
4.  **Wait for Processing**: The script waits 2 seconds after the `load` event. This provides time for the internal optimization models to analyze the page.
5.  **Page Visibility**: `page.bringToFront()` is called to ensure the page is "active," which is often a prerequisite for rendering/annotation features.

## ⚠️ Known Constraints

*   **Failure on empty pages**: The method will fail (with a protocol error) on `about:blank` or pages with negligible content.
*   **Headless Instability**: Despite numerous attempts with various flags, the `Page.getAnnotatedPageContent` method consistently returns a `Protocol error` when running in headless mode. 
*   **Experimental Status**: This is an experimental CDP feature and its behavior may change or be removed in future Chromium versions.

## 🔬 Success Verification
Verified working targets (returning binary proto strings):
*   `example.com` (~1.3KB)
*   `paulirish.com` (~38KB)

## 🧩 Decoding the Response

The `Page.getAnnotatedPageContent` method returns a base64 string which is a serialized `AnnotatedPageContent` message from Chromium's `components/optimization_guide/proto/features/common_quality_data.proto`.

### Setting up Decoder

To decode this in a Node.js project:
1. Ensure `protobufjs` is installed (`npm install protobufjs`).
2. Download the `.proto` file from the Chromium source tree.
3. Compile the proto into a JavaScript module using `protobufjs-cli`:
   ```bash
   npx -p protobufjs-cli pbjs -t static-module -w es6 --es6 -o utils/common_quality_data_pbjs.js utils/proto/common_quality_data.proto
   ```
4. **Important**: Because of ES module interop on newer versions of Node, you may need to adjust the generated import string from `import * as $protobuf from "protobufjs/minimal";` to `import $protobuf from "protobufjs/minimal.js";`.

### Usage

Once the module is generated, decoding the base64 content is straightforward:

```javascript
import pb from './utils/common_quality_data_pbjs.js';

export function decodeAnnotatedPageContent(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  
  // Decode the buffer into a protobuf Message
  const message = pb.optimization_guide.proto.AnnotatedPageContent.decode(buffer);
  
  // Convert into a standard JavaScript object
  return pb.optimization_guide.proto.AnnotatedPageContent.toObject(message, {
    longs: String,
    enums: String,
    defaults: true,
    arrays: true,
    objects: true,
  });
}
```

The resulting object contains properties mapped from the original protobuf definitions (such as `rootNode`).
