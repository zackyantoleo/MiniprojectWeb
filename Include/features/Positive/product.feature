Feature: Product
  As a user i want to Add product to Cart
  Incresing and decreasing total ammount of the product
  Pay the product form the cart

  Scenario: Add Product to Cart
    Given Navigate to altashop homepage
    When User select the product
    And User click beli button
    Then Product will added to the cart

   Scenario: Increasing Total Product in the Cart 
    Given Navigate to altashop homepage
    When User already have product in the cart
    And User click plus button
    Then The ammount of product increased
    
    Scenario: Decreasing Total Product in the Cart 
    Given Navigate to altashop homepage
    When User already have product in the cart
    And User click minus button
    Then The ammount of product decreased
    
    Scenario: Pay product from Cart 
    Given Navigate to altashop homepage
    When User already have product in the cart and User already logged in
    And User click pay button
    Then Product have been paid
    
    @Negative
    Scenario: Pay product from Cart 
    Given Navigate to altashop homepage
    When User already have product in the cart
    And User click pay button
    Then User navigate to homepage again