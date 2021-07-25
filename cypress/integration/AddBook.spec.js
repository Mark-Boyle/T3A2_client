describe("Add Book", () => {
  it("should take user to Add Book", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("Add Book").click();
    cy.url().should("include", "/addbook");
  });
  it("should take user to Add Book", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("Add Book").click();
    cy.url().should("include", "/addbook");
    // ---------CHECK FOR RENDER COMPONENTS--------------------

    cy.contains("Home");
    cy.contains("History");
    cy.contains("Wishlist");
    cy.contains("Add Book");
    cy.contains("Sign Out");
    cy.contains("Libro");
    cy.contains("Where will you escape to next...");
    // ---------CHECK FOR Form--------------------
    cy.contains("Add a Book");
    cy.contains("Title");
    cy.contains("Author");
    cy.contains("Genre");
    cy.contains("Status");
    cy.contains("unread");
    // ---------Adding input to form for to history --------------------
    cy.get(".form");
    cy.get("#title")
      .type("Mistborn: the final empire")
      .should("have.value", "Mistborn: the final empire");
    cy.get("#author")
      .type("Brandon Sanderson")
      .should("have.value", "Brandon Sanderson");
    cy.get("#year").clear().type("2006").should("have.value", "2006");
    cy.get("#genre").type("Fantasy").should("have.value", "Fantasy");
    cy.get("#status").type("checkbox").check().should("have.value", "on");
    cy.get(".form-button").type("Add Book").click();
    cy.url().should("include", "/addbook");
    cy.contains("History").click();
    cy.get(".card-container > a").eq(0).contains("Mistborn: the final empire");
  });
  // cy.url().should("include", "/history");
  // ---------Adding input to form for unread book --------------------
  it("should add book to wishlist", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
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
    // cy.get("#status").type("checkbox").check().should("have.value", "off");
    cy.get(".form-button").type("Add Book").click();
    cy.url().should("include", "/addbook");
    cy.contains("Wishlist").click();
    cy.get(".card-container > p > a").eq(0).contains("Mistborn: the final empire");
    cy.get(".card-container > p > a").eq(0).contains("Author: Brandon Sanderson");
  });
});
