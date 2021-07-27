describe("Review", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get("#username").type("alice").should("have.value", "alice");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("History").click();
    cy.url().should("include", "/history");
  });

  it("should click on book and render to book show page", function () {
    cy.get(".card").eq(0).click();
    cy.url().should("include", "/books/");
  });

  it("should have an editable description ", function () {
    // cy.get(".card").eq(0).click();
    // // cy.url().should("include", "/books/");
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books/");
    cy.get(".edit-icon").eq(5).click();
    cy.get("input")
      .clear()
      .type("UPDATED REVIEW")
      .should("have.value", "UPDATED REVIEW");
    cy.get("#save-icon").click();
  });
    it("should have an editable rating ", function () {
        cy.get(".card-link").eq(0).click();
        cy.url().should("include", "/books/");
        cy.get(".edit-icon").eq(6).click();
        cy.get("input")
          .clear()
          .type("3")
          .should("have.value", "3");
        cy.get("#save-icon").click();
    });
});
