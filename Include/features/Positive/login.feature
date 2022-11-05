Feature: Login
  As a user i want to login with my registered account

  Scenario Outline: Login with valid data
    Given Navigate to altashop homepage
    When User navigate to login page
    And User input <email> and <password>
    Then Click login button

    Examples: 
      | email          | password |
      | zack@gmail.com | zack123  |

  @Negative
  Scenario Outline: Login with false data
    Given Navigate to altashop homepage
    When User navigate to login page
    And User input <email> and <password>
    And User click login button
    Then Error message showed

    Examples: 
      | email          | password       |
      | zack@gmail.com | aaaaaaa        |
      | aaaa@gmail.com | zack123        |
      | zack123        | zack@gmail.com |
      | aaaaaaa        | aaaaaaa        |

  Scenario Outline: Login with false data
    Given Navigate to altashop homepage
    When User navigate to login page
    And User input <email> and <password>
    And User click login button
    Then Error message showed

    Examples: 
      | email          | password       |
      |                | zack123        |
      | zack@gmail.com |                |
      |                |                |
