# Twin B2B – Playwright Automation

## Overview

This repository contains automated end-to-end tests for the **Twin B2B / Twin Liquor website**, developed using **Playwright with JavaScript**.

The automation focuses on validating the primary B2B shopping journey, starting from user authentication and continuing through product selection, cart validation, and checkout.

---

## Automated Flow

The current automation covers the following end-to-end workflow:

**Login → Super Admin → Begin Shopping Mode → Product Search → Add to Cart → Cart → Checkout**

### Flow Details

1. **Login**

   * Navigate to the Twin B2B login page.
   * Enter valid login credentials.
   * Submit the login form.
   * Validate successful authentication.

2. **Super Admin**

   * Access the Super Admin dashboard.
   * Locate the required company/account.
   * Verify the expected company record.

3. **Begin Shopping Mode**

   * Select the required company.
   * Click **Begin Shopping Mode**.
   * Validate the transition to the shopping experience.

4. **Product Search**

   * Use the header search functionality.
   * Search for the required product.
   * Validate that the expected product is displayed.

5. **Add to Cart**

   * Select the required product.
   * Add the product to the cart.
   * Handle applicable cart/substitution popups.
   * Validate that the product is successfully added.

6. **Cart / Checkout**

   * Open the shopping cart.
   * Verify that the selected product is present.
   * Validate the cart state.
   * Proceed toward checkout.
   * Verify that the checkout flow is accessible.

---

## Technology & Tools

| Technology / Tool | Purpose                                  |
| ----------------- | ---------------------------------------- |
| **Playwright**    | End-to-end browser automation            |
| **JavaScript**    | Test scripting language                  |
| **Node.js / npm** | Project runtime and package management   |
| **Git**           | Version control                          |
| **GitHub**        | Source code repository and collaboration |

---

## Project Structure

```text
twinb2b/
│
├── tests/
│   ├── twin-liquor/
│   │   └── login-to-checkout.spec.js
│   │
│   └── ...
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> The project structure may expand as additional automation scenarios are added.

---

## Prerequisites

Before running the automation, make sure the following are installed:

* Node.js
* npm
* Playwright
* Git

Verify Node.js and npm installation:

```bash
node --version
npm --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Harsh-cronixweb/twinb2b.git
```

Navigate to the project:

```bash
cd twinb2b
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers if required:

```bash
npx playwright install
```

---

## Running the Tests

### Run all Playwright tests

```bash
npx playwright test
```

### Run a specific test

```bash
npx playwright test tests/twin-liquor/login-to-checkout.spec.js
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run tests using the Playwright UI

```bash
npx playwright test --ui
```

### Run a specific browser project

```bash
npx playwright test --project=chromium
```

---

## Test Reports

After execution, Playwright generates test results and reports based on the project configuration.

To open the HTML report:

```bash
npx playwright show-report
```

The report can be used to review:

* Passed tests
* Failed tests
* Test execution details
* Screenshots
* Error information
* Execution traces, where configured

---

## Automation Objectives

The primary objectives of this automation are to:

* Validate the critical Twin B2B shopping workflow.
* Reduce repetitive manual testing effort.
* Provide repeatable regression coverage.
* Ensure consistent execution of the same test flow.
* Establish a foundation for expanding automated test coverage.

---

## Current Scope

| Area                | Coverage    |
| ------------------- | ----------- |
| Login               | ✅ Automated |
| Super Admin         | ✅ Automated |
| Company Selection   | ✅ Automated |
| Begin Shopping Mode | ✅ Automated |
| Product Search      | ✅ Automated |
| Add to Cart         | ✅ Automated |
| Cart Validation     | ✅ Automated |
| Checkout Flow       | ✅ Automated |

---

## Future Automation Scope

The automation suite can be expanded to cover additional scenarios, including:

* Invalid login scenarios
* Multiple product searches
* Product quantity validation
* Inventory and backorder scenarios
* Cart quantity updates
* Product removal from cart
* Shipping method validation
* Checkout field validation
* Order submission validation
* Additional B2B-specific business rules
* Cross-browser regression testing

---

## Version Control Workflow

The project is maintained using Git and GitHub.

For future code changes:

```bash
git status
git add .
git commit -m "Update automation tests"
git push
```

---

## Repository

**GitHub Repository:**
https://github.com/Harsh-cronixweb/twinb2b

---

## Documentation

The detailed automation flow, scope, and validation points are documented separately for management and QA review.

Please refer to the project documentation along with this repository for a complete overview of the current automation implementation.

---

## Author

**Harsh**

**Role:** QA / Test Automation

**Automation Tool:** Playwright

**Language:** JavaScript

