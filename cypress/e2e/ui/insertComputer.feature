#Author: Lucas Matheus de souza Pereira
@cypress @javascript @computer
Feature: add a new computer

  Background:
    Given I am on the computer's main page

  @newComputer
  Scenario: TC1: I want to create a new computer
    Given I click on the add a new computer button
    And I type the computer name 
    And I type the introduced
    And I type the discontinued
    And I select the "Evans & Sutherland" Company
    When I click on the create this computer button
    Then the page should show the message "Done !  Computer XXXX has been created"
    And I want to be able to find the computer