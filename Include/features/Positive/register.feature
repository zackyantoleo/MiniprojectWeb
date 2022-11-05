Feature: Register 
As a new user i want to register an account first

  Scenario Outline: Register
    Given Navigate to altashop homepage  
    When User navigate to login page
    And User open register form
    And Input new <fullname> and <email> and <password>
    Then Click register button

    Examples: 
      | fullname  | email               | password |
      | zackweb   | zackweb12d@gmail.com | zack123  |
      
      @Negative
        Scenario Outline: Register with empty data
    Given Navigate to altashop homepage  
    When User navigate to login page
    And User open register form
    And Input new <fullname> and <email> and <password>
    And User click register button
    Then Error register message showed

    Examples: 
      | fullname  | email             | password |
      |           | zackweb@gmail.com | zack123  |
      |   zack    |                   | zack123  |
      |   zack    | zackweb@gmail.com |          |