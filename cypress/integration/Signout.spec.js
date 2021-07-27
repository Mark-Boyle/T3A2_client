describe("Sign out", function () {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("should click the sign out link and sign user out", function () {
    cy.contains("Sign Out").click();
    cy.url().should("include", "/");
  });
});
