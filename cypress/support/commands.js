// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add("login", () => {
// 	cy.request({
// 		method: 'POST',
// 		url: 'http://localhost:3000/login',
// 		body: {
// 				username:'alice',
// 				password: 'qwerty'
// 		}
// 	})
// 	.then((resp) => {
// 		window.localStorage.setItem('token', resp.body.token)
// 	})
// });
Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:3000/login",
    body: {
      username: "alice",
      password: "qwerty",
    },
  }).then((resp) => {
    window.localStorage.setItem("token", resp.body.token);
  });
});
Cypress.Commands.add("newBook", () => {
  cy.login();
  cy.visit("/login");
  cy.contains("Add Book").click();
  cy.url().should("include", "/addbook");
  cy.get(".form");
  cy.get("#title").type("Life of Pi");
  cy.get("#author").type("Yann Martel").should("have.value", "Yann Martel");
  cy.get("#year").clear().type("2001");
  cy.get("#genre").type("Adventure");
  cy.get(".checkbox").eq(0).click();
  cy.get(".form-button").click();
});
Cypress.Commands.add("unreadBook", () => {
    cy.login();
    cy.visit("/login");
    cy.contains("Add Book").click();
    cy.url().should("include", "/addbook");
    cy.get(".form");
    cy.get("#title").type("Life of Pi");
    cy.get("#author").type("Yann Martel").should("have.value", "Yann Martel");
    cy.get("#year").clear().type("2001");
    cy.get("#genre").type("Adventure");
    cy.get(".checkbox").eq(1).click();
    cy.get(".form-button").click();
  });
