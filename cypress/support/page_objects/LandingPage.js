/// <reference types = "cypress"/>

export default class LandingPage {

    clickButtonAddNewComputer() {
        cy.get(`[id="add"]`)
            .filter(':visible')
            .click();
    }

    clickMainPage() {
        cy.get(`[class="fill"] a`)
            .filter(':visible')
            .click();
    }

    clickButtonFilterByName() {
        cy.get(`[id="searchsubmit"]`)
            .filter(':visible')
            .click();
    }

    clickButtonPreviousPage() {
        cy.get(`[class="prev"] a`)
            .filter(':visible')
            .click();
    }

    clickButtonNextPage() {
        cy.get(`[class="next"] a`)
            .filter(':visible')
            .click();
    }

    insertComputerName(name) {
        cy.get(`[id="searchbox"]`)
            .filter(':visible')
            .clear()
            .type(name);
    }

    assertHowMuchComputerWasFound(number) {
        cy.get('[id="main"] > h1')
            .filter(':visible')
            .should('have.text', `${number} computers found`);
    }

    assertHasRegister() {
        cy.get(`[class="well"] em`)
            .should('not.include', `Nothing to display`);
    }

    assertColunmComputerName() {
        cy.get(`.col-name`)
            .filter(':visible')
            .should('include', `Computer name`);
    }

    assertColunmIntroduced() {
        cy.get(`.col-introduced`)
            .filter(':visible')
            .should('include', `Introduced`);
    }

    assertColunmDiscontinued() {
        cy.get(`.col-discontinued`)
            .filter(':visible')
            .should('include', `Discontinued`);
    }

    assertColunmCompany() {
        cy.get(`.col-company`)
            .filter(':visible')
            .should('include', `Company`);
    }

    assertWarningMessage(message) {
        cy.get(`.alert-message`)
            .filter(':visible')
            .should('have.text', message);
    }

    clickLinkComputerName(name) {
        cy.get(`tbody > tr > td > a`)
            .filter(':visible')
            .contains(name)
            .first()
            .click();
    }

    printListOfData() {
        cy.get(`tbody > tr > td > a`)
            .filter(':visible')
            .then(computerNames => {
                for (const name of computerNames) {
                    cy.log(name.text);
                }

            });
    }


}
