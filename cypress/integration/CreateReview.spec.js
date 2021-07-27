describe("Review", () => {
  beforeEach(() => {
    cy.login();
    cy.newBook();
  });
  it("should render review form and fields in book card ", function () {
    cy.get(".card-link").last().click()
    cy.get("input").eq(0)
      .clear()
      .type("TEST REVIEW")
      .should("have.value", "TEST REVIEW");
      cy.get("input").eq(1)
      .clear()
      .type("5")
      .should("have.value", "5");
      cy.get("input").eq(2).click()
    
  });
});



      