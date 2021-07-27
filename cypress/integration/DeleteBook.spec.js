describe("Delete Book", function () {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
    cy.newBook();
    cy.unreadBook();
  });

  it("should delete a book from history", function () {
    cy.contains("History").click();
    cy.get(".card-button.btn.btn-primary ")
      .click({ multiple: true })
      .should("not.exist");
  });

  it("should delete a book from wishlist", function () {
    cy.contains("Wishlist").click();
    cy.get(".card-button.btn.btn-primary").click({ multiple: true }).should("not.exist");
  });
});
