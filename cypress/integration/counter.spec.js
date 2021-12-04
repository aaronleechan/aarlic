/// <reference types = "cypress"/>

context("Home Page",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/Counter')
    })

    it('should find Count Page',()=>{
        cy.get('[data-cy=counter-header]').contains("COUNT")
    })

    // it('renders without error',()=>{
        
    // })

    it('counter starts at 0',()=>{
        cy.get('[data-cy=counter-header]').contains(0)
    })

    it('clicking on button increments counter display',()=>{
        cy.get('[data-cy=counter-increment]').click()
        cy.get('[data-cy=counter-header]').contains(1)
    })

    it('clicking on button decrement counter display',()=>{
        cy.get('[data-cy=counter-decrement]').click()
        cy.get('[data-cy=counter-header]').contains(-1)
    })

    it('clicking on button increment 5 times counter display 5',()=>{
        cy.get('[data-cy=counter-increment]').click()
        cy.get('[data-cy=counter-increment]').click()
        cy.get('[data-cy=counter-increment]').click()
        cy.get('[data-cy=counter-increment]').click()
        cy.get('[data-cy=counter-increment]').click()
        cy.get('[data-cy=counter-header]').contains(5)
    })

    it('clicking on button decrement 5 times counter display -5',()=>{
        cy.get('[data-cy=counter-decrement]').click()
        cy.get('[data-cy=counter-decrement]').click()
        cy.get('[data-cy=counter-decrement]').click()
        cy.get('[data-cy=counter-decrement]').click()
        cy.get('[data-cy=counter-decrement]').click()
        cy.get('[data-cy=counter-header]').contains(-5)
    })

})