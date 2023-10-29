
## Installation

Describe how to install your module.

```bash
pnpm install @KatKmiotek/my-test-helpers
```

## Usage

How to use the three methods provided by module:

waitForResponse  
Example:

```ts
import { Page } from "@KatKmiotek/my-test-helpers";
import { waitForResponse } from "your-module-name";

const page = /* Initialize your Playwright Page object */;
const urlToMonitor = "https://example.com/api/data";
const expectedStatusCode = 200;

await waitForResponse(page, urlToMonitor, expectedStatusCode);
```
