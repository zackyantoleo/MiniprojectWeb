Feature: Product
  As a user i want to try pay the product form the cart
    
    Scenario: Pay product from Cart 
    Given Navigate to altashop homepage
    When User already have product in the cart
    And User click pay button
    Then User navigate to homepage again