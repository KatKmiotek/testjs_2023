{
    "name": "@KatKmiotek/my-test-helpers",
    "private": false,
    "version": "0.0.1",
    "repository": {
      "type": "git",
      "url": "https://github.com/KatKmiotek/test_helpers_module.git"
    },
    "type": "module",
    "files": [
      "dist",
      "index.d.ts"
    ],
    "main": "./dist/helpers.umd.cjs",
    "module": "./dist/helpers.js",
    "types": "./index.d.ts",
    "exports": {
      "types": "./index.d.ts",
      "import": "./dist/helpers.js",
      "require": "./dist/helpers.umd.cjs"
    },
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "format:check": "npx prettier . --check",
      "format:fix": "npx prettier . --write",
      "prepare": "husky install"
    },
    "devDependencies": {
      "@types/node": "^20.8.9",
      "@typescript-eslint/eslint-plugin": "^6.9.0",
      "@typescript-eslint/parser": "^6.9.0",
      "eslint": "^8.52.0",
      "husky": "^8.0.0",
      "prettier": "3.0.3",
      "typescript": "^5.2.2",
      "vite": "^4.4.11"
    },
    "dependencies": {
      "@playwright/test": "^1.39.0",
      "playwright": "^1.39.0"
    }
  }
  