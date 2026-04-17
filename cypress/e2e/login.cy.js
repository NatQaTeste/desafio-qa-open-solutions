import loginPage from '../support/pages/login.page'

describe('Parte 1 - Fluxo de Login', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve realizar login com sucesso', () => {
    loginPage.preencherLogin('standard_user', 'secret_sauce')
    
    cy.get('.title').should('contain', 'Products')
  })

  it('Deve exibir mensagem de erro ao usar senha inválida', () => {
    loginPage.preencherLogin('standard_user', 'senha_errada')
    
    
    cy.get('[data-test="error"]').should('be.visible')
  })
})