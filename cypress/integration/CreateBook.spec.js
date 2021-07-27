describe("Create Book", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });


  it("should add a book to history", function () {
    cy.contains("Add Book").click();
    cy.get(".form");
    cy.get("#title")
      .type("Mistborn: the final empire")
      .should("have.value", "Mistborn: the final empire");
    cy.get("#author")
      .type("Brandon Sanderson")
      .should("have.value", "Brandon Sanderson");
    cy.get("#year").clear().type("2006").should("have.value", "2006");
    cy.get("#genre").type("Fantasy").should("have.value", "Fantasy");
    cy.get(".checkbox").eq(0).click().should("have.value", "read");
    cy.get(".form-button").click();
    cy.url().should("include", "/history");
    
  });

  it("should add a book to wishlist", function () {
    cy.contains("Add Book").click();
    cy.url().should("include", "/addbook");
    cy.get(".form");
    cy.get("#title")
      .type("Mistborn: the final empire")
      .should("have.value", "Mistborn: the final empire");
    cy.get("#author")
      .type("Brandon Sanderson")
      .should("have.value", "Brandon Sanderson");
    cy.get("#year").clear().type("2006").should("have.value", "2006");
    cy.get("#genre").type("Fantasy").should("have.value", "Fantasy");
    cy.get(".checkbox").eq(1).click().should("have.value", "unread");
    cy.get(".form-button").click();
    cy.url().should("include", "/wishlist");
    cy.get(".card-container").contains("Mistborn: the final empire").should('exist');
    cy.get(".card-container").contains("Brandon Sanderson").should('exist');
  });

  it("should not add book with missing field to wishlist", function () {
    cy.contains("Add Book").click();
    cy.url().should("include", "/addbook");
    cy.get(".form");
    cy.get("#title")
      .type("dsfsdf")
      .should("have.value", "dsfsdf");
    cy.get("#author")
      .type("dsfsdf")
      .should("have.value", "dsfsdf");
    cy.get(".form-button").click();
    cy.url().should("include", "/wishlist");
    cy.get(".card-container").contains("dsfsdf").should('not.exist');
    
  });

});
