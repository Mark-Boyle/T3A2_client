describe("Show Book", function () {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should show book information for book", function () {
    cy.get(".card-container > a")
      .eq(0)
      .click()
      .url()
      .should("include", "/books");
  });

  it("should display book without editable information", function () {
    cy.get(".card-container > a")
      .eq(0)
      .click()
      .url()
      cy.contains("svg").should('not.exist');;
  });

  

});
