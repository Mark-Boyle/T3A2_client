// describe("landing page", function () {  });
describe("Register a new user", function () {
  beforeEach(() => {
    cy.visit("/");
  });

  
    it("should click the sign up link and takes to form", function () {
      cy.contains("Sign Up").click();
      cy.url().should("include", "/sign-up");
    });

    it("should fill in the form and take to home page ", function () {
      cy.contains("Sign Up").click();
      cy.get("input").eq(0)
      .type("newUser").should("have.value", "newUser");
      cy.get("input").eq(1)
      .type("newUser@test.com").should("have.value", "newUser@test.com");
      cy.get("input").eq(2)
      .type("password").should("have.value", "password");
      cy.get("input").eq(3)
      .type("password").should("have.value", "password");
     cy.get("input").eq(4).should("have.value", "Sign Up").click();
     cy.url().should("include", "/");
    });
  });

