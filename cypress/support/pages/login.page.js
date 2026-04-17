class LoginPage {
  // Seletores mapeados com base nos atributos de teste do sistema
  get inputUsername() { return cy.get('[data-test="username"]') }
  get inputPassword() { return cy.get('[data-test="password"]') }
  get btnLogin() { return cy.get('[data-test="login-button"]') }

  /**
   * Realiza o login no sistema SauceDemo
   * @param {string} usuario 
   * @param {string} senha 
   */
  preencherLogin(usuario, senha) {
    this.inputUsername.type(usuario)
    this.inputPassword.type(senha, { log: false }) // Boa prática: não exibe a senha nos logs do Cypress
    this.btnLogin.click()
  }
}

export default new LoginPage();