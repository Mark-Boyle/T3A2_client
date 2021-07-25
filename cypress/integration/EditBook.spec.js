// -----Edit Book In Wishlist--------------------------------------------------------------------
describe("Edit unread Book Details", () => {
  it("should take user to Add Book", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("Wishlist").click();
    cy.url().should("include", "/wishlist");
    //   ----------Click on book to edit------------------------------------------------------
    cy.get(".card-container > p > a").eq(0).click();
    cy.url().should("include", "/books");
    //   cy.contains(".form");
    cy.contains("Title");
    cy.contains("Author");
    cy.contains("Year");
    cy.contains("Genre");
    cy.contains("Status");
    //   ----------To Edit Title------------------------------------------------------
    // cy.get(".edit-icon").eq().click({ multiple: true });

    cy.get(".edit-icon").eq(0).click();
    cy.get("input").clear().type("updated book title").should("have.value", "updated book title");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(0);
    //   ----------To Edit Author------------------------------------------------------
    cy.get(".edit-icon").eq(1).click();
    cy.get("input").clear().type("updated book author").should("have.value", "updated book author");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(1)
    //   ----------To Edit Year------------------------------------------------------
    // cy.get("#year").clear().type("2006").should("have.value", "2006");
    cy.get(".edit-icon").eq(2).click();
    cy.get("input").clear().type("1111").should("have.value", "1111");
    cy.get("#save-icon").click();
    cy.get(".text-field").eq(2)
    //   ----------To Edit Genre------------------------------------------------------
    cy.get(".edit-icon").eq(3).click();
    cy.get("input")
      .clear()
      .type("updated book genre")
      .should("have.value", "updated book genre");
    cy.get("#save-icon").eq(0).click();
    cy.get(".text-field").eq(3).contains("updated book genre")
    
    //   ----------To Edit Status------------------------------------------------------
    // -----valid input------ uncomment will change book to read!!!!!!
    // cy.get(".edit-icon").eq(4).click();
    // cy.get("input").clear().type("read");
    // cy.get("#save-icon").eq(0).click();
    // cy.get(".text-field").eq(4).should("have.value", "read");
    // -----invalid input
        cy.get(".edit-icon").eq(4).click();
        cy.get("input")
          .clear()
          .type("invalid input")
          .should("have.value", "invalid input");
        cy.get("#save-icon").eq(0).click();
        cy.get(".text-field").eq(4).contains("unread")
  });
});
// -----Edit Book In History--------------------------------------------------------------------
// describe("Edit read Book Details", () => {
//     it("should take user to Add Book", function () {
//       cy.visit("http://localhost:8080/login");
//       cy.get("#username").type("testuser").should("have.value", "testuser");
//       cy.get("#password").type("qwerty").should("have.value", "qwerty");
//       cy.get(".form-button").type("Submit").click();
//       cy.url().should("include", "/");
//       cy.contains("History").click();
//       cy.url().should("include", "/history");

//     //   ----------Click on book to edit------------------------------------------------------
//     });

// });
