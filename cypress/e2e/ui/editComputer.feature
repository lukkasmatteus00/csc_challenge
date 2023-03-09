#Author: Lucas Matheus de souza Pereira
@cypress @javascript @cumputer
Feature: edit a computer

  Background:
    Given I am on the computer's main page
    And I search for the computer name "Commodore 64"
    When I click on the first result that has the computer name "Commodore 64"

  @editComputer
  Scenario: TC1: I want to edit a computer
    Given I type the computer name
    And I type the introduced
    And I type the discontinued
    When I click on the save this computer button
    Then the page should show the message "Done !  Computer XXXX has been updated"
    And I want to be able to find the computer

  @checkInput
  Scenario: TC2: I want to check a failure validation displays
    Given I clear the computer name
    And I type the wrong value introduced "as"
    And I type the wrong value discontinued "as"
    When I click on the save this computer button
    Then the page should show the error message
      | errorMessage                                                                                              |
      | Failed to refine type : Predicate isEmpty() did not fail.                                                 |
      | Failed to decode date : java.time.format.DateTimeParseException: Text 'as' could not be parsed at index 0 |