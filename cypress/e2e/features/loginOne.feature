Feature: Personal Media

  Scenario: Login with valid credentials
    Given I visit personal media
    When I enter username "test@test.com"
    And I enter password "test@test.com"
    Then I should be logged in

    @IncorrectLogin
    Scenario: Login with invalid credentialsß
    Given I visit personal media
    When I enter username "eee@test.com"
    And I enter password "eee@test.com"
    Then I should not be logged in