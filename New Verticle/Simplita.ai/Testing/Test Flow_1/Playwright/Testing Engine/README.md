# Playwright Test Automation Framework

This project contains automated tests using Playwright with TypeScript.

## Project Structure

```
├── pages/          # Page Object Models
├── tests/          # Test files
│   └── specs/      # Test specifications
├── utils/          # Utility functions and helpers
└── playwright.config.ts  # Playwright configuration
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npx playwright test
```

- Run tests in specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

- Run tests with UI mode:
```bash
npx playwright test --ui
```

- Run tests in debug mode:
```bash
npx playwright test --debug
```

## Test Reports

- List Reporter: View test results in the console
- HTML Reporter: Open the HTML report after test execution:
```bash
npx playwright show-report
```

## Features

- TypeScript support
- Page Object Model pattern
- Parallel test execution
- Multiple browser support
- Screenshot on test failure
- Video recording on retry
- HTML and List reporting 