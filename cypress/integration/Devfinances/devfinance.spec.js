
/// <reference types="Cypress" />

const entrada = 'Salario'
const entradaEdi = 'Salario editado'
const saida = 'Gasolina'
const saidaEdi = 'Gasolina Editado'
describe('devfinance.spec', () => {

  context('Tela Inicial', () => {

    
    it('TC001 -Valida Pagina inicial', () => {
      cy.visit('https://maratona-discover-devfinance.netlify.app/')
      //percy
    })

    
    it('TC002 - Trocando a cor de fundo para escuro ', () => {
      cy.trocarCor()
      //percy
    })

    
    it('TC003 -Trocando a cor de fundo para claro', () => {
      cy.trocarCor()
      //percy
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

      })
      it('TC007 -Nova transação com valor negativo – cancelar', () => {

        cy.criarTransacao(saida,'-60','2022-01-10',false)


      })
      it('TC005 -Nova transação com valor negativo - gravar', () => {

        cy.criarTransacao(saida,'-60','2022-01-10',true)


      })
      it('TC006 -Transação inseridas Tela com valor negativo', () => {

      })
    })

    context('Edição de dados', () => {
      it('TC007 -Editar transação com valor positivo -gravar', () => {

        cy.editar(entrada,entradaEdi,'200',)

      })

      it('TC008 -Editar transação com valor negativo -gravar', () => {

        cy.editar(saida,saidaEdi,'-80',)

      })

    })

    context('Exclusão de dados', () => {
      it('Removendo  transação com valor positivo', () => {
        cy.remover(entradaEdi)
      });
      it('Removendo  transação com valor negativo', () => {
        cy.remover(saidaEdi)
      });


    })

  })

})