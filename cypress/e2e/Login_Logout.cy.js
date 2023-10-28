describe('Login and Logout Scenarioes', () => {

    beforeEach( () =>{
        cy.visit('https://app-revamp.ynmodata.com/')
        cy.get(".langClasses").click()
        cy.title().should('eq','Ynmo')
    })

    it('Incorrect login', () => {
      
      cy.get("#login-username").type("m.zahran+1000@ynmodata.com")
      cy.get("#login-password").type("Password")
      cy.get("#login_btn").click()
      cy.get("[status='warning']").contains("Invalid username and password combination")
    })

   it('Correct login', () => {
      
        cy.get("#login-username").type("m.zahran+52@ynmodata.com")
        cy.get("#login-password").type("P@ssw0rd")
        cy.get("#login_btn").click()
        cy.url().should('contain','/dashboard')
      })

    it('Logout', () => {
      
        cy.get("#login-username").type("m.zahran+52@ynmodata.com")
        cy.get("#login-password").type("P@ssw0rd")
        cy.get("#login_btn").click()
        cy.get('.ant-dropdown-trigger', { timeout: 10000 }).should('be.visible');
        cy.get(".ant-dropdown-trigger").click()
        cy.contains("Logout").click()
        cy.url().should('contain','/auth/login')
      })  





  })