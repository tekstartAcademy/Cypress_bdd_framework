Feature: Personal Media

  @loginTable
  Scenario: Login with data table
    Given I visit personal media
    When I enter "<username>"
    And I enter pass "<password>"
    Then I should be logged in if "<username>" plus "<username>"  are valid

Examples:
| username      | password      |
| test@test.com | test@test.com |
| ddds@test.com | test@test.com |
| www@test.com | wwww@test.com |
| abababababbab | ahahahahahaha |