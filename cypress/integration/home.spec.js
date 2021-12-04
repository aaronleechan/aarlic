/// <reference types = "cypress"/>

context("Home Page",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('should find Landing Page',()=>{
        cy.get('[data-cy=header]').contains("This is Landing Page")
    })

    describe('Navigation',()=>{
        it('should navigate to Counter page',()=>{
            cy.get('a[href*=Counter').click()

            cy.url().should('include','/Counter')

        })
    })
})