Cypress.Commands.add('preencheEmailEClicaNoBotao', () => {
    cy.get('#ap_email').type(Cypress.env("email"))
    cy.get('#continue').click()
    cy.get('#ap_password').type(Cypress.env("senha"))
    cy.get('#signInSubmit').click()
})