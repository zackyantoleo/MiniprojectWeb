Feature: Logut
  As a user i want to logout an account

  Scenario: Logout
    Given Navigate to altashop homepage and User already logged in
    When User click profile icon at navbar
    And User click logout option
    Then User navigate to homepage


