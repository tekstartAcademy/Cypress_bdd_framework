import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I enter {string}', (username) => {
  cy.get('#email').type(username);
});

When('I enter pass {string}', (password) => {
  cy.get("[name='password']").type(password);
});

Then("I should be logged in if {string} plus {string}  are valid", (username, password) => {
  cy.get('button').contains('Login').click();

  if(username === "test@test.com" && password === "test@test.com"){
    cy.url().should('not.contain', 'login');
  }else{
    cy.url().should('contain', 'login');
  }
});