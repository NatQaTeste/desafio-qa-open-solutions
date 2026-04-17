class LoginPage {
  
  get inputUsername() { return cy.get('[data-test="username"]') }
  get inputPassword() { return cy.get('[data-test="password"]') }
  get btnLogin() { return cy.get('[data-test="login-button"]') }

  
  preencherLogin(usuario, senha) {
    this.inputUsername.type(usuario)
    this.inputPassword.type(senha)
    this.btnLogin.click()
  }
}

export default new LoginPage();