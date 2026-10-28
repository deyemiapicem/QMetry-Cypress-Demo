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

Also add these repository variables:

- `QMETRY_API_URL`: the full QMetry automation import endpoint. For the US
  region, use
  `https://qtmcloud.qmetry.com/rest/api/automation/importresult`; use the
  corresponding endpoint for your tenant's region.
- `QMETRY_ENVIRONMENT`: the exact name of an environment already configured in
  QMetry.
- `QMETRY_BUILD`: the exact name of a build already configured in QMetry.

The configured environment and build must already exist in QMetry; the workflow
does not create them. Do not use the GitHub Actions run number unless a matching
QMetry build exists for every run.

The workflow passes the practice-test secrets to Cypress, uploads the Cucumber
JSON artifact, and imports the report into QMetry when the report exists. The
artifact is retained even when tests fail.
