
/// <reference types="Cypress" />
//

const entrada = 'Salario'
const entradaEdi = 'Salario editado'
const saida = 'Gasolina'
const saidaEdi = 'Gasolina Editado'
describe('devfinance.spec', () => {

  context('Tela Inicial', () => {


    it('TC001 -Valida Página inicial', () => {
      cy.visit('https://maratona-discover-devfinance.netlify.app/')
      cy.percySnapshot()
    })


    it('TC002 - Trocando a cor de fundo para escuro ', () => {
      cy.trocarCor()
      cy.percySnapshot()
      
    })


    it('TC003 -Trocando a cor de fundo para claro', () => {
      cy.trocarCor()
      cy.percySnapshot()
    })
  })

  context('Transação', () => {

    context('Inserção de dados', () => {
      it('TC004 -Nova transação com valor positivo – cancelar', () => {

        cy.criarTransacao(entrada,'100','2022-01-10',false)


      })
      it('TC005 -Nova transação com valor positivo - gravar', () => {

        cy.criarTransacao(entrada,'100','2022-01-10',true)

      })
      it('TC006 -Transação inseridas Tela com valor positivo', () => {
        cy.percySnapshot()
      })
      it('TC007 -Nova transação com valor negativo – cancelar', () => {

        cy.criarTransacao(saida,'-60','2022-01-10',false)


      })
      it('TC008 -Nova transação com valor negativo - gravar', () => {

        cy.criarTransacao(saida,'-60','2022-01-10',true)


      })
      it('TC009 -Transação inseridas Tela com valor negativo', () => {
        cy.percySnapshot()
      })
    })

    context('Edição de dados', () => {
      it('TC010 -Editar transação com valor positivo -gravar', () => {

        cy.editar(entrada,entradaEdi,'200',)

      })

      it('TC011 -Editar transação com valor negativo -gravar', () => {

        cy.editar(saida,saidaEdi,'-80',)

      })

    })

    context('Exclusão de dados', () => {
      it('TC012 -Removendo  transação com valor positivo', () => {
        cy.remover(entradaEdi)
        cy.percySnapshot()
      })
      it('TC013 -Removendo  transação com valor negativo', () => {
        cy.remover(saidaEdi)
        cy.percySnapshot()
      })


    })

  })

})