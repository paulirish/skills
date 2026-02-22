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
