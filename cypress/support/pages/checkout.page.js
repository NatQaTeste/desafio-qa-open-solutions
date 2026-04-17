class CheckoutPage {
  // Elementos mapeados com seletores estáveis (data-test)
  get inputNome() { return cy.get('[data-test="firstName"]') }
  get inputSobrenome() { return cy.get('[data-test="lastName"]') }
  get inputCEP() { return cy.get('[data-test="postalCode"]') }
  get btnContinue() { return cy.get('[data-test="continue"]') }
  get btnFinish() { return cy.get('[data-test="finish"]') }
  get msgSucesso() { return cy.get('.complete-header') }

  /**
   * Preenche os dados de entrega e avança para a revisão
   * @param {string} nome 
   * @param {string} sobrenome 
   * @param {string} cep 
   */
  preencherInformacoes(nome, sobrenome, cep) {
    this.inputNome.type(nome)
    this.inputSobrenome.type(sobrenome)
    this.inputCEP.type(cep)
    this.btnContinue.click()
  }

  // Método essencial para fechar o fluxo de compra
  finalizarCompra() {
    this.btnFinish.should('be.visible').click()
  }
}

export default new CheckoutPage();