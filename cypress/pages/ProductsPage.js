import CheckoutPage from "./CheckoutPage";

class ProductsPage {

  ProductsPage(){

  }
  productDashboard() {
    cy.get(".title").should("have.text", "Products");
    return this;
  }

  viewProduct() {
    cy.get("#item_0_title_link > .inventory_item_name").click();
    return this
  }

  productDetailsPageAndAddToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    return this;
  }
  
  goToCart() {
    cy.get(".shopping_cart_link").click();
    const checkoutPage=new CheckoutPage();
    return checkoutPage;
  }
}

export default ProductsPage;
