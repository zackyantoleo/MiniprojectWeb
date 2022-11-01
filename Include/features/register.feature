Feature: As a new user i want to register an account first

  Scenario Outline: Register
    Given Navigate to altashop homepage  
    When User navigate to login page
    And User open register form
    And User input <fullname> and <password>
    Then Click register button 

    Examples: 
      | fullname  | email          | password |
      | zackweb   | zack@gmail.com | zack123  |