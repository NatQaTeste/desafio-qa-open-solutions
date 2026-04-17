import loginPage from '../support/pages/login.page'
import produtosPage from '../support/pages/produtos.page'
import checkoutPage from '../support/pages/checkout.page'

describe('Jornada do Usuário - Fluxo de Compra', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve realizar a compra de dois produtos com sucesso', () => {
    // Realiza autenticação com credenciais válidas
    loginPage.preencherLogin('standard_user', 'secret_sauce')
    
    produtosPage.adicionarDoisProdutos()
    produtosPage.acessarCarrinho()
    
    // Validação da quantidade de itens no carrinho conforme regra do desafio
    cy.get('.cart_item').should('have.length', 2)
    cy.get('[data-test="checkout"]').click()
    
    checkoutPage.preencherInformacoes('Fulano', 'QA', '12345-678')
    checkoutPage.finalizarCompra()
    
    // Asserção final e captura de evidência para relatório
    checkoutPage.msgSucesso
      .should('be.visible')
      .and('contain', 'Thank you for your order!')

    cy.screenshot('evidencia-sucesso-compra')
  })
})