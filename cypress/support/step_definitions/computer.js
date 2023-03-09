/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LandingPage from "../page_objects/LandingPage";
import FormPage from "../page_objects/FormPage";
import date from "date-and-time";
const Leite = require('leite');

const landingPage = new LandingPage();
const formPage = new FormPage();
const leite = new Leite();

let computerName, introducedDate, discontinuedDate;

Given("I am on the computer's main page", () => {
    cy.visit('/computers');
});

Given("I click on the add a new computer button", () => {
    landingPage.clickButtonAddNewComputer();
    formPage.assertPageName("Add a computer");
});

Given("I search for the computer name {string}", (name) => {
    landingPage.insertComputerName(name);
    landingPage.clickButtonFilterByName();
});

Given("I type the computer name", () => {
    const name = leite.pessoa.nome({ nomeDoMeioAbreviado: true });
    computerName = name;
    formPage.insertComputerName(name);
});

Given("I clear the computer name", () => {
    formPage.insertComputerName();
});

Given("I type the introduced", () => {
    const dateLeite = leite.pessoa.nascimento({ formato: 'YYYY-MM-DD' })
    introducedDate = dateLeite;
    formPage.insertIntroduced(dateLeite);
});

Given("I type the discontinued", () => {
    const dateTime = date.format(date.addYears(new Date(), -1), 'YYYY-MM-DD');
    discontinuedDate = dateTime;
    formPage.insertDiscontinued(dateTime);
});

Given("I type the wrong value introduced {string}", (value) => {
    formPage.insertIntroduced(value);
});

Given("I type the wrong value discontinued {string}", (value) => {
    formPage.insertDiscontinued(value);
});

Given("I select the {string} Company", (company) => {
    formPage.selectCompany(company);
});

When("I click on the create this computer button", () => {
    formPage.clickButtonSaveThisComputer();
});

When("I click on the save this computer button", () => {
    formPage.clickButtonSaveThisComputer();
});

When("I click on the first result that has the computer name {string}", (name) => {
    landingPage.clickLinkComputerName(name);
});

Then("the page should show the message {string}", (message) => {
    landingPage.assertWarningMessage(message.replace('XXXX', computerName));
});

Then("the page should show the error message", (datatable) => {
    datatable.hashes().forEach(row => {
        formPage.assertInputFixError(row.errorMessage);
    });
});

Then("I want to be able to find the computer", () => {
    landingPage.insertComputerName(computerName);
    landingPage.clickButtonFilterByName();
    landingPage.assertHowMuchComputerWasFound(1);
});

Then("the page should show {string} results", (number) => {
    landingPage.assertHowMuchComputerWasFound(number);
});

Then("I want to print the map of the returned data", () => {
    landingPage.printListOfData();
});

Then("I want to print a list of computer names on the last page of the results", () => {
    for (let i = 0; i <= 1; i++) {
        landingPage.clickButtonNextPage();
    }
    landingPage.printListOfData();
});
