describe('Create Beneficiary and Group', () => {

    beforeEach( () =>{
        cy.visit('https://app-revamp.ynmodata.com/')
        cy.get(".langClasses").click()
        cy.title().should('eq','Ynmo')
        cy.get("#login-username").type("m.zahran+52@ynmodata.com")
        cy.get("#login-password").type("P@ssw0rd")
        cy.get("#login_btn").click()
        cy.get('.ant-dropdown-trigger', { timeout: 10000 }).should('be.visible');
        cy.get(".menu-list-btn").click()
        cy.get(".leading-loose").contains("Beneficiaries").click()
    })

    it('Create Beneficiary', () => {
        cy.contains("Add New Beneficiary").click()
        cy.wait(3000)
        cy.get("#beneficiaryName").type("Cypress Beneficiary")    
        cy.contains("Add & complete beneficiary's details").click();
        cy.get(".ant-notification-notice-with-icon").contains("The beneficiary is added successfully")
        cy.contains("Save").click();
        cy.get(".ant-notification-notice-with-icon").contains("Beneficiary updated successfully.")
    })

    it('Delete Beneficiary', () => {
        cy.get('a.ant-dropdown-link', { timeout: 10000 }).should('be.visible');
        cy.get("a.ant-dropdown-link").first().click()
        cy.contains("Delete").click()
        cy.get("[type='button']").contains("Delete").click()
        cy.get(".ant-notification-notice-with-icon").contains("Beneficiary Deleted Successfully!")
    })

    it('Create Group', () => {
        cy.contains("Add New Group").click()
        cy.get('.ant-select-selection-placeholder', { timeout: 10000 }).should('be.visible');
        cy.get("#group-name").type("Cypress Group")
        cy.contains("Save").click()
        cy.get(".ant-notification-notice-with-icon").contains("Group has been created successfully")
    })

    it('Delete Group', () => {
        cy.contains("Beneficiaries Groups").click()
        cy.get("a.ant-dropdown-link").first().click()
        cy.contains("Delete").click()
        cy.get("[type='button']").contains("Delete").click()
        cy.get(".ant-notification-notice-with-icon").contains("Group has been deleted successfully")
    })

  })