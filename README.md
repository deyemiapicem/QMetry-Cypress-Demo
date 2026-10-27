# QMetry Cypress Demo

This project runs Cypress end-to-end tests with the Cucumber preprocessor.

## Run locally

1. Install dependencies with `npm ci`.
2. Copy `cypress.env.example.json` to `cypress.env.json` and enter the test credentials.
3. Run the tests with `npm test`.

`cypress.env.json` is ignored by Git and should not be committed.

## Run on GitHub Actions

The Cypress workflow runs on pushes and pull requests to `main` and `master`.
In the GitHub repository, add these Actions repository secrets under **Settings >
Secrets and variables > Actions**:

- `PRACTICE_USERNAME`
- `PRACTICE_PASSWORD`

The workflow passes these secrets to Cypress as environment variables. GitHub
Actions runs the tests; GitHub Copilot is a coding assistant and does not run
workflows.
