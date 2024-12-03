import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit personal media', () => {
  cy.visit('https://personal-media.vercel.app/');
});

When('I enter username {string}', (username) => {
  cy.get('#email').type(username);
});

When('I enter password {string}', (password) => {
  cy.get("[name='password']").type(password);
});

Then('I should be logged in', (password) => {
  cy.get('button').contains('Login').click();
  cy.url().should('not.contain', 'login');
});
