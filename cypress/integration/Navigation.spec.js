// describe("landing page", function () {  });
describe("Navigation", function () {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should take user to Add Book", function () {
    cy.contains("Add Book").click();
    cy.url().should("include", "/addbook");
  });

  it("should take user to wishlist", function () {
    cy.contains("Wishlist").click();
    cy.url().should("include", "/wishlist");
  });

  it("should take user to history", function () {
    cy.contains("History").click();
    cy.url().should("include", "/history");
  });
});
