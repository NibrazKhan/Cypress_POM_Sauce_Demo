import ProductsPage from "./ProductsPage";

class CheckoutPage {

  checkout() {
    cy.get('[data-test="checkout"]').click();
    return this;
  }

  addUserInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
    return this;
  }

  finishPurchase() {
    cy.get('[data-test="finish"]').click();
    return this;
  }
  
  cancelPurchase(){
    cy.get('[data-test="cancel"]').click();
    const productPage = new ProductsPage();
    return productPage;
  }

  purchaseCompleteAssertion(expectedText) {
    cy.get(".complete-header").should("have.text", expectedText);
    return this;
  }
}

export default CheckoutPage;
