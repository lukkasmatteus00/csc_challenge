#Author: Lucas Matheus de souza Pereira
@cypress @javascript @cumputer
Feature: list computer

  Background:
    Given I am on the computer's main page

  @listHP
  Scenario: TC1: I want to list the HP computer
    Given I search for the computer name "HP"
    Then the page should show "10" results
    And I want to print the map of the returned data

  @listIBM
  Scenario: TC1: I want to list the HP computer
    Given I search for the computer name "IBM"
    Then the page should show "25" results
    Then I want to print a list of computer names on the last page of the results