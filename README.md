# QMetry Cypress Demo

This project runs Cypress end-to-end tests with the Cucumber preprocessor.

## Run locally

1. Install dependencies with `npm ci`.
2. Copy `cypress.env.example.json` to `cypress.env.json` and enter the test credentials.
3. Run the tests with `npm test`.

`cypress.env.json` is ignored by Git and should not be committed.
The Cucumber JSON results are written to
`cypress/reports/cucumber-report.json`.

## Run on GitHub Actions

Pull requests to `main` and `master` install dependencies and verify Cypress.
Credentialed Cypress runs and QMetry uploads run on pushes to those branches so
pull-request code is not given repository secrets.

In the GitHub repository, add these Actions repository secrets under **Settings >
Secrets and variables > Actions**:

- `PRACTICE_USERNAME`
- `PRACTICE_PASSWORD`
- `QMETRY_API_KEY`

Also add the `QMETRY_API_URL` repository variable with the full QMetry
automation import endpoint. For the US region, use
`https://qtmcloud.qmetry.com/rest/api/automation/importresult`; use the
corresponding endpoint for your tenant's region.

The workflow passes the practice-test secrets to Cypress, uploads the Cucumber
JSON artifact, and imports the report into QMetry when the report exists. The
artifact is retained even when tests fail.
