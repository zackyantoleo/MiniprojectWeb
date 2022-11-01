Feature: As a user i want to login an account

  Scenario Outline: Login
    Given Navigate to altashop homepage  
    When User navigate to login page
    And User input <email> and <password>
    Then Click register button 

    Examples: 
      | email               | password |
      | zack@gmail.com      | zack123  |