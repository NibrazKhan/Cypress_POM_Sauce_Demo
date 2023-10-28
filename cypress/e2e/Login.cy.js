import LoginPage from "../pages/LoginPage";


describe("Login suite", () => {
    const loginPage = new LoginPage();

    it.only("Testing with valid credentials", () => {
        loginPage.login("standard_user", "secret_sauce");
    })

    it("Testing with invalid credentials", () => {
        loginPage.login("standarduser", "secret_sauce");
        loginPage.invalidAssertion();
    })

    it("locked_out_user", () => {
        loginPage.login("locked_out_user", "secret_sauce")
        loginPage.userLockedOut();
    })
})