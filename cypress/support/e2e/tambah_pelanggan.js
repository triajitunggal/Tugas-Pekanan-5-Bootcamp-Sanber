describe('E2E Tambah kategori kasir Demo', () => {

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

describe("Tambah pelanggan", ()=>{
    it('should contain url /login', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/dashboard')
    })

    it('user success login to kasir Aja', ()=>{
        //dashboard
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/dashboard')
       
        //masuk ke menu pelanggan
        cy.get('#root > div > div > div > div.css-1mqa38q > div > button').click()

        //action tambah
        cy.contains("tambah").click()
        cy.get('#nama').type("bagas")
        cy.get('#no.hp').type("081234567891")
        cy.get('#alamat').type("bandung")
        cy.get('#keterangan').type("new")

        //Click simpan
        cy.contains("simpan").click()

        //Assert dashboard page after login
        cy.url().should('include','/customers')
        cy.contains("dashboard / pelanggan")
    })
})