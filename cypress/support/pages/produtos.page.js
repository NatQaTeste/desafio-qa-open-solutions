class ProdutosPage {
  get btnAdicionarBackpack() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]') }
  get btnAdicionarBikeLight() { return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]') }
  get íconeCarrinho() { return cy.get('.shopping_cart_link') }
  get btnCheckout() { return cy.get('[data-test="checkout"]') }

  adicionarDoisProdutos() {
    this.btnAdicionarBackpack.click()
    this.btnAdicionarBikeLight.click()
  }

  acessarCarrinho() {
    this.íconeCarrinho.click()
  }
}

export default new ProdutosPage();