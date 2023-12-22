/// <reference types="Cypress" />
describe('Realizando cadastro para efetuar login', () => {

  beforeEach(() => {
    cy.visit('/login')
    
    cy.contains('Fazer login').should('be.visible')
  })
  it('Realizar login na amazon', () => {
    cy.preencheEmailEClicaNoBotao()
    cy.contains(Cypress.env('nome')).should('be.visible')
  })
})