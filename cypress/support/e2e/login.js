describe('E2E Login to inventory', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://kasirdemo.belajarqa.com')

 

      cy.get('#email').type("triajitunggals@gmail.com")

      cy.get('#password').type("271297")

      cy.contains("login").click()

      cy.url().should('include', '/dashboard')

    })

  })

describe("Open Kasir AJA URL", ()=>{
    it('should contain url /login', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
    })

    it('user success login to kasir Aja', ()=>{
        //Open kasir aja login page
        cy.visit('https://kasirdemo.belajarqa.com')
        //cy.url().should('include', '/login')

        //Input username and password
        cy.get('#email').type("triajitunggals@gmail.com")
        cy.get('#password').type("271197")

        //Click login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        //Assert dashboard page after login
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })
})