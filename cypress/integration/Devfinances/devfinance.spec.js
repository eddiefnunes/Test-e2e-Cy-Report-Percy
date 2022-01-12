
/// <reference types="Cypress" />
describe('devfinance.spec', () => {

  context('Tela Inicial', () => {

    //ID: TC001
    it(' TC001 -Valida Pagina inicial', () => {
      cy.visit('/')
      //percy
    })

    //ID: TC002
    it('TC002 - Trocando a cor de fundo para escuro ', () => {


      cy.get('.theme-switch-circle').click()

    })

    //ID: TC003
    it('TC002 -Trocando a cor de fundo para claro', () => {
      cy.get('.theme-switch-circle').click()

    })
  })

  context('Transação', () => {

    context('Inserção de dados', () => {
      it('TC004 -Nova transação com valor positivo – botão cancelar', () => {

        cy.visit('https://maratona-discover-devfinance.netlify.app//')
        cy.get('#transactions > .button').click()
        cy.get('#description').clear()
        cy.get('#description').type('Salario')
        cy.get('#amount').clear()
        cy.get('#amount').type('100')
        cy.get('#date').type('2022-01-10')
        cy.get('a').contains('Cancelar').click()

      })
      it('TC005 -Nova transação com valor positivo gravar', () => {

        cy.get('#transactions > .button').click()
        cy.get('#description').clear()
        cy.get('#description').type('Salario')
        cy.get('#amount').clear()
        cy.get('#amount').type('100')
        cy.get('#date').type('2022-01-10')
        cy.get('button').contains('Salvar').click()
      })
      it('TC006 -Transação inseridas Tela com valor positivo', () => {

      })
      it('TC007 -Nova transação com valor negativo – botão cancelar', () => {

        // cy.visit('https://maratona-discover-devfinance.netlify.app//');
        cy.get('#transactions > .button').click()
        cy.get('#description').clear()
        cy.get('#description').type('Gasolina')
        cy.get('#amount').clear()
        cy.get('#amount').type('-60')
        cy.get('#date').type('2022-01-10')
        cy.get('a').contains('Cancelar').click()

      })
      it('TC005 -Nova transação com valor negativo gravar', () => {

        cy.get('#transactions > .button').click()
        cy.get('#description').clear()
        cy.get('#description').type('Salario')
        cy.get('#amount').clear()
        cy.get('#amount').type('-60')
        cy.get('#date').type('2022-01-10')
        cy.get('button').contains('Salvar').click()

      })
      it('TC006 -Transação inseridas Tela com valor negativo', () => {

      })
    })

    context('Edição de dados', () => {

    })

    context('Exclusão de dados', () => {

    })

  })

})