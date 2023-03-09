/// <reference types = "cypress"/>

export default class FormPage {

    clickButtonDeleteThisComputer() {
        cy.get(`[class="btn danger"]`)
            .filter(':visible')
            .click();
    }

    clickButtonSaveThisComputer() {
        cy.get(`[class="btn primary"]`)
            .filter(':visible')
            .click();
    }

    clickButtonCancel() {
        cy.get(`[class="btn"]`)
            .filter(':visible')
            .click();
    }


    insertComputerName(name) {
        if (name) {
            cy.get(`[id="name"]`)
                .filter(':visible')
                .clear()
                .type(name);
        } else {
            cy.get(`[id="name"]`)
                .filter(':visible')
                .clear();
        }
    }

    insertIntroduced(name) {
        cy.get(`[id="introduced"]`)
            .filter(':visible')
            .clear()
            .type(name);
    }

    insertDiscontinued(name) {
        cy.get(`[id="discontinued"]`)
            .filter(':visible')
            .clear()
            .type(name);
    }

    selectCompany(name) {
        cy.get(`[id="company"]`)
            .filter(':visible')
            .select(name);
    }

    assertPageName(name) {
        cy.get('[id="main"] > h1')
            .filter(':visible')
            .should('have.text', name);
    }

    assertInputFixError(message) {
        cy.get(`[class="clearfix error"] [class="help-inline"]`)
            .filter(':visible')
            .contains(message)
            .should('have.text', message);;
    }

}