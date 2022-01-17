
const el = require('./elementos').ELEMENTS

// C
Cypress.Commands.add('criarTransacao', (desc,valor,data,op) => {

  cy.get(el.btnNovTransacao).click()
  cy.get(el.txtDesc).clear().type(desc)
  cy.get(el.txtValor).clear().type(valor)
  cy.get(el.data).type(data)
  cy.percySnapshot()
  if(op)
  {
    cy.get('button').contains('Salvar').click()

  } else cy.get('a').contains('Cancelar').click()


})


// E
Cypress.Commands.add('editar', (entrada,entradaEdit,valor) => {

  cy.contains(entrada).parent().find(el.btnEditar).click()
  cy.get(el.txtDesc).clear().type(entradaEdit)
  cy.get(el.txtValor).clear().type(valor)
  cy.percySnapshot()
  cy.get('a').contains('Cancelar').should('be.visible')
  cy.get('button').contains('Salvar').click()


})

// R
Cypress.Commands.add('remover', (descs) => {

  cy.contains(descs).parent().find(el.btnRemover).click()
})

// T
Cypress.Commands.add('trocarCor', () => {
  cy.get(el.interuptor).click() })



