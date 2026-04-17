class ProdutosPage {
  // Seletores utilizando atributos data-test para maior estabilidade
  get btnAdicionarBackpack() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]') }
  get btnAdicionarBikeLight() { return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]') }
  get iconeCarrinho() { return cy.get('.shopping_cart_link') }
  get btnCheckout() { return cy.get('[data-test="checkout"]') }

  /**
   * Adiciona itens específicos ao carrinho para validar o fluxo de compra
   */
  adicionarDoisProdutos() {
    this.btnAdicionarBackpack.click()
    this.btnAdicionarBikeLight.click()
  }

  /**
   * Redireciona o usuário para a página do carrinho de compras
   */
  acessarCarrinho() {
    this.iconeCarrinho.click()
  }
}

export default new ProdutosPage();