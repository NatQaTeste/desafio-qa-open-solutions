import loginPage from '../support/pages/login.page'
import produtosPage from '../support/pages/produtos.page'
import checkoutPage from '../support/pages/checkout.page'

describe('Cenário 3 - Fluxo de Compra Completo', () => {
  it('Deve comprar dois produtos com sucesso', () => {
    cy.visit('/')
    
    // 1. Login
    loginPage.preencherLogin('standard_user', 'secret_sauce')
    
    // 2. Adicionar 2 produtos e ir ao carrinho
    produtosPage.adicionarDoisProdutos()
    produtosPage.acessarCarrinho()
    
    // 3. Validar se os 2 produtos estão lá (Briefing)
    cy.get('.cart_item').should('have.length', 2)
    cy.get('[data-test="checkout"]').click()
    
    // 4. Checkout e Finalização
    checkoutPage.preencherInformacoes('Fulano', 'QA', '12345-678')
    checkoutPage.finalizarCompra()
    
    // 5. Validação final da mensagem de confirmação
    checkoutPage.msgSucesso.should('contain', 'Thank you for your order!')

    checkoutPage.msgSucesso.should('contain', 'Thank you for your order!')
    cy.screenshot('evidencia-sucesso-compra') // Tira o print aqui
    
  })
})