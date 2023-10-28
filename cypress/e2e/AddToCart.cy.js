import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

describe("Product purchase", () => {
  const loginPage = new LoginPage();
  const productPage = new ProductsPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    loginPage.login("standard_user", "secret_sauce");
  });

  it("verify product purchase is successful", () => {
    productPage.productDashboard()
      .viewProduct()
      .productDetailsPageAndAddToCart()
      .goToCart()
      .checkout()
      .addUserInfo("Pollab", "Ahmed", "1234")
      .finishPurchase()
      .purchaseCompleteAssertion("Thank you for your order!");
  });

  it("verify product purchase is cancelled", () => {
    productPage.productDashboard()
      .viewProduct()
      .productDetailsPageAndAddToCart()
      .goToCart()
      .checkout()
      .addUserInfo("Pollab", "Ahmed", "1234")
      .cancelPurchase()
      .productDashboard()
  });
});
