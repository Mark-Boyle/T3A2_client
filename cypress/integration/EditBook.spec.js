describe("Edit unread book details", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get("#username").type("alice").should("have.value", "alice");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("Wishlist").click();
    cy.url().should("include", "/wishlist");
  });

  it("should click on book and render to book show page", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books/");
  });

  it("book showpage should have editable title", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(0).click();
    cy.get("input")
      .clear()
      .type("updated book title")
      .should("have.value", "updated book title");
    cy.get("#save-icon").click();
  });

  it("book showpage should have editable Author", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(1).click();
    cy.get("input")
      .clear()
      .type("updated book author")
      .should("have.value", "updated book author");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(1);
  });
  it("book showpage should have editable year", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(2).click();
    cy.get("input").clear().type("1111").should("have.value", "1111");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(2);
  });

  it("book showpage should have editable genre", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(3).click();
    cy.get("input")
      .clear()
      .type("updated book genre")
      .should("have.value", "updated book genre");
    cy.get("#save-icon").eq(0).click();
  });

  it("book showpage should have editable status, invalid input won't save", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(4).click();
    cy.get("input")
      .clear()
      .type("invalid input")
      .should("have.value", "invalid input");
    cy.get("#save-icon").eq(0).click();
    cy.get(".text-field").eq(4).contains("unread");
  });
  it("book showpage should have editable status, valid input will save", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(4).click();
    cy.get("input").clear().type("read").should("have.value", "read");
    cy.get("#save-icon").eq(0).click();
  });
});

describe("Edit read book details", () => {
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
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books/");
  });

  it("book showpage should have editable title", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(0).click();
    cy.get("input")
      .clear()
      .type("updated book title")
      .should("have.value", "updated book title");
    cy.get("#save-icon").click();
  });

  it("book showpage should have editable Author", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(1).click();
    cy.get("input")
      .clear()
      .type("updated book author")
      .should("have.value", "updated book author");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(1);
  });
  it("book showpage should have editable year", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(2).click();
    cy.get("input").clear().type("1111").should("have.value", "1111");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(2);
  });

  it("book showpage should have editable genre", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(3).click();
    cy.get("input")
      .clear()
      .type("updated book genre")
      .should("have.value", "updated book genre");
    cy.get("#save-icon").eq(0).click();
  });

  it("book showpage should have editable status, invalid input won't save", function () {
    cy.get(".card-link").eq(0).click();
    cy.url().should("include", "/books");
    cy.get(".edit-icon").eq(4).click();
    cy.get("input")
      .clear()
      .type("invalid input")
      .should("have.value", "invalid input");
    cy.get("#save-icon").eq(0).click();
    cy.get(".text-field").eq(4).contains("unread");
  });
});
