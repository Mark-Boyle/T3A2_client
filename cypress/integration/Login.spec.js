describe("Login", () => {
  it("should render the login page", function () {
    cy.visit("http://localhost:8080/login");
  });
  it("should contain a login form", function () {
    cy.visit("http://localhost:8080/login");
    cy.contains("Libro");
    cy.contains("Where will you escape to next...");
    cy.contains("Home");
    cy.contains("Log In");
    cy.contains("Sign Up");
    cy.contains("Username");
    cy.contains("Password");
    cy.get(".form-button").type("Submit").click();
  });
  it("should render the login page", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username")
      .type("testusername")
      .should("have.value", "testusername");
    cy.get("#password")
      .type("testpassword")
      .should("have.value", "testpassword")
      .should("have.attr", "type", "password");
    cy.get(".form-button").type("Submit");
  });

  it("should log in and out a test user", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("Where will you escape to next...");
    cy.contains("Home");
    cy.contains("Add Book");
    cy.contains("Wishlist");
    cy.contains("History");
    cy.contains("Sign Out").click();
    cy.url().should("include", "/");
  });

  it("should take user to wishlist", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("Wishlist").click();
    cy.url().should("include", "/wishlist");
  });
  it("should take user to history", function () {
    cy.visit("http://localhost:8080/login");
    cy.get("#username").type("testuser").should("have.value", "testuser");
    cy.get("#password").type("qwerty").should("have.value", "qwerty");
    cy.get(".form-button").type("Submit").click();
    cy.url().should("include", "/");
    cy.contains("History").click();
    cy.url().should("include", "/history");
  });
 
});
//   it("login in with correct credentials", () => {
//     cy.visit("http://localhost:8080/login");
//     cy.intercept("POST", "http://localhost:8080/login", {
//       statusCode: 200,
//       body: {
//         username: "alice",
//         password: "qwerty",
//         token: "1",
//       },
//     })

// cy.contains("Login").click();

// cy.url().should("include", "/login");
