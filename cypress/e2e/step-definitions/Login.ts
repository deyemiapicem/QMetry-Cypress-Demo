/// <reference types="cypress" />

import {After, Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

After(() => {
    cy.url().then((url) => {
        if (url.includes('/logged-in-successfully/')) {
            cy.contains('a', 'Log out').click();
        }
    });

    cy.clearCookies();
    cy.clearLocalStorage();
});


const loginUrl = 'https://practicetestautomation.com/practice-test-login/';

Given(`I navigate to the login page`, () => {
    cy.visit(loginUrl);
});

When(`I enter my username`, () => {
    cy.env(['PRACTICE_USERNAME']).then((env) => {
        const username = env.PRACTICE_USERNAME as string | undefined;

        if (!username) {
            throw new Error('Set PRACTICE_USERNAME in cypress.env.json or as a CYPRESS_PRACTICE_USERNAME environment variable.');
        }

        cy.get('#username').type(username);
    });
});

When(`I enter my password`, () => {
    cy.env(['PRACTICE_PASSWORD']).then((env) => {
        const password = env.PRACTICE_PASSWORD as string | undefined;

        if (!password) {
            throw new Error('Set PRACTICE_PASSWORD in cypress.env.json or as a CYPRESS_PRACTICE_PASSWORD environment variable.');
        }

        cy.get('#password').type(password, { log: false });
    });
});

When(`I click Login`, () => {
    cy.get('#submit').click();
});

Then(`I should see the Home page`, () => {
    cy.url().should('include', '/logged-in-successfully/');
    cy.contains('h1', 'Logged In Successfully').should('be.visible');
});