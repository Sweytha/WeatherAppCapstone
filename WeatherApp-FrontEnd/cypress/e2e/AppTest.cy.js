describe("App Running Test", () => {
  it("passes", () => {
    //Visit login page
    cy.visit("http://localhost:3000/login");
    //Ensure the page is working
    cy.location("pathname").should("include", "/login");

    //Visit signup page
    cy.visit("http://localhost:3000/signup");

    //Ensure the page is working
    cy.location("pathname").should("include", "/signup");

    //Visit password reset page
    cy.visit("http://localhost:3000/resetEmailLink");
    //Ensure the page is working
    cy.location("pathname").should("include", "/resetEmailLink");
  });
});
