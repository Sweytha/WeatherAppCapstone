describe("Login Test", () => {
  it("Login with valid input", () => {
    //Visit login page
    cy.visit("http://localhost:3000/login");

    // Enter valid username and password in form inputs
    cy.get("input[name=username]").type("sweythak");
    cy.get("input[name=password]").type("Sweytha@12345").type("{enter}"); // '{enter}' submits the form

    // Ensure login is successful.
    //If it is successful the app will navigate to WelcomePage "/".
    cy.location("pathname").should("include", "/");
    // UI should reflect this user being logged in WelcomePage
    cy.get("h1").should("contain", "sweythak");
  });
});

it("Display error message when login fails", () => {
  //Visit login page
  cy.visit("http://localhost:3000/login");

  // enter invalid login credentials
  cy.get("input[name=username]").type("sweythak");
  cy.get("input[name=password]").type("Sweytha@1234").type("{enter}"); // '{enter}' submits the form

  // check the server response status code and message
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/user/login',
    body: {
      username: 'sweythak',
      password: 'Sweytha@1234'
    },
    failOnStatusCode: false // don't fail the test if the response is an error
  }).then((response) => {
    expect(response.status).to.eq(400);
    expect(response.body.message).to.eq('Username or Password is Incorrect. Please try again');
  })

});


