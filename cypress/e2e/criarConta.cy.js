describe('Realizando cadastro para efetuar login', () => {

  beforeEach(() => {
    cy.visit('/')
    
    cy.get('#nav-logo-sprites').should('be.visible')
  })
  it('Cadatro para criar a conta de login', () => {
    cy.get('span[id="nav-link-accountList-nav-line-1"')
      .click()
      .should('be.visible', 'Fazer login')

    cy.get('#createAccountSubmit')
      .click()
      .should('be.visible', 'Criar conta')
  })
})