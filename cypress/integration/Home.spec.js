describe("landing page", function () {
  it("visits the landing page signed out", function () {
    cy.visit("http://localhost:8080/");
    cy.contains("Libro");
    cy.contains("Where will you escape to next...");
    cy.contains("Not Logged In");
    cy.contains("Log In");
    cy.contains("Sign Up");
  });
  describe("login ", function () {
    it("clicks the log in link and takes to form", function () {
      cy.visit("http://localhost:8080/");
      cy.contains("Log In").click();
      cy.url().should("include", "/login");
    });
  });
  describe("Sign up", function () {
    it("clicks the sign up link and takes to form", function () {
      cy.visit("http://localhost:8080/");
      cy.contains("Sign Up").click();
      cy.url().should("include", "/sign-up");
    });
    describe("Book Card", function () {
      it("clicks a book card link and takes to login", function () {
        cy.visit("http://localhost:8080/");

        cy.get(".card-container > a").eq(1).click();
        cy.url().should("include", "/login");
      });
    });
  });
});
