Repo name : Cypress_Assignment
Web application URL : https://app-revamp.ynmodata.com/
HTML report URL: cypress\reports\html\index.html

Pre-requisites added are
First file
BeforeEach at each spec file to
* Open the URL
* Change from AR to EN language
* Check the title

Second file
* Open the URL
* Change from AR to EN language
* Check the title
* Login with correct user name and password
* Check the title after login


Installation of the test
* package.json
* cypress.config.js
==> Report installation : cypress-mochawesome-reporter
* Configured at cypress.config.js as
- reporter: 'cypress-mochawesome-reporter'
- require('cypress-mochawesome-reporter/plugin')(on);
- At e2e.js file at support folder cypress\support\e2e.js added
import 'cypress-mochawesome-reporter/register';

Tests added are
2 spec files
First file : Login_Logout.cy.js
Login with incorrect username and password
Login with correct user name and password
Logout

Second file : CreateBeneficiaryandGroup.cy.js
Create Beneficiary
Delete Beneficiary
Create Group
Delete Group
