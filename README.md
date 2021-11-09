# GH Pages

The project is deployed to github pages at the following URL:

https://mdobro.github.io/terazo-interview/

# Running Locally

1. `npm install`
1. `npm start`

# Linting

This project uses ESLint for code quality and Prettier for style.

To run the linter: `npm run lint`

# Testing

Testing is done using jest and react testing library

To run tests: `npm run test`

To update test snapshots: `npm run test-update`

# CI/CD

This project uses github actions on the master branch to run linting and tests before deploying the code to https://mdobro.github.io/terazo-interview/
