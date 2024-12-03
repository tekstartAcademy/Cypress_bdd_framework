Feature: Personal Media

  Scenario: Login with data table
    Given I visit personal media
    When I enter username "test@test.com"
    And I enter password "test@test.com"
    Then I should be logged in

    @loginTable
    Scenario: Login with data table
    Given I visit personal media
    When I enter username "eee@test.com"
    And I enter password "eee@test.com"
    Then I should be logged in