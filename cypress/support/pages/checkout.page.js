class CheckoutPage {
  get inputNome() { return cy.get('[data-test="firstName"]') }
  get inputSobrenome() { return cy.get('[data-test="lastName"]') }
  get inputCEP() { return cy.get('[data-test="postalCode"]') }
  get btnContinue() { return cy.get('[data-test="continue"]') }
  get btnFinish() { return cy.get('[data-test="finish"]') }
  get msgSucesso() { return cy.get('.complete-header') }

  preencherInformacoes(nome, sobrenome, cep) {
    this.inputNome.type(nome)
    this.inputSobrenome.type(sobrenome)
    this.inputCEP.type(cep)
    this.btnContinue.click()
  }

  finalizarCompra() {
    this.btnFinish.click()
  }
}

export default new CheckoutPage();