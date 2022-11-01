Feature: As a user i want to logout an account

  Scenario Outline: Login
    Given Navigate to altashop homepage  
    When User already logged in
    And User click profile icon at navbar
    And User click logout option
    Then User navigate to homepage

    Examples: 
      | email                | password |
      | zack@gmail.com       | zack123  |