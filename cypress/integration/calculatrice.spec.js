/// <reference types="cypress" />

describe('calculatrice app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('common elements', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Projet Calculatrice')
    })

    it('touch count', () => {
        cy.get('.touch').should('have.length', 18)
    })

    it('addition', () => {
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="+"]').click()
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="="]').click()
        cy.get('.result').should('have.text', '4')
    })

    it('substraction', () => {
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="-"]').click()
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="="]').click()
        cy.get('.result').should('have.text', '0')
    })

    it('multiplication', () => {
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="*"]').click()
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="="]').click()
        cy.get('.result').should('have.text', '4')
    })

    it('division', () => {
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="/"]').click()
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="="]').click()
        cy.get('.result').should('have.text', '1')
    })

    it('modulo', () => {
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="%"]').click()
        cy.get('.touch[data-value="2"]').click()
        cy.get('.touch[data-value="="]').click()
        cy.get('.result').should('have.text', '0')
    })

    it('square', () => {
        cy.get('.touch[data-value="4"]').click()
        cy.get('.touch[data-value="√x"]').click()
        cy.get('.touch[data-value="="]').click()
        cy.get('.result').should('have.text', '2')
    })

})