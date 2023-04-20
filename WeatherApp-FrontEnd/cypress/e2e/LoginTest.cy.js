import { validCredentials, invalidCredentials } from "../fixtures/login.json";

describe("Valid Login Test", () => {
    it("should allow a user to log in with valid credentials", () => {
        cy.login(validCredentials);
        // Ensure login is successful.
        //If it is successful the app will navigate to WelcomePage "/".
        cy.location("pathname").should("include", "/");
        // UI should reflect this user being logged in WelcomePage
        cy.get("h1").should("contain", validCredentials.username);
    });
});

describe("Valid Login Server Response Test", () => {
    it("should be able to get a valid response from server", () => {
        cy.loginServerResponseCheck(validCredentials);
    });
});

describe("Invalid Login Server Response Test", () => {
    it("check the server response status code and message", () => {
        cy.InvalidloginServerResponseCheck(invalidCredentials);
    });
});
