import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I enter {string}', (username) => {
  cy.get('#email').type(username);
});

When('I enter pass {string}', (password) => {
  cy.get("[name='password']").type(password);
});
