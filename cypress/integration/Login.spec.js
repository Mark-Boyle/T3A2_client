describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the login page", function () {
    cy.visit("/login");
  });

  it("should render the login page by clicking on a book card", function () {
    cy.get(".card-container > a").eq(0).click().url().should("include", "/login");
    
  });

  //  it("should render the login page", function () {
  // //   cy.visit("/login");
  // //   cy.get("#username").type("testusername").should("have.value", "testusername");
  // //   cy.get("#password")
  // //     .type("testpassword")
  // //     .should("have.value", "testpassword")
  // //     .should("have.attr", "type", "password");
  // //   cy.get(".form-button").type("Submit");
  // // });
});
