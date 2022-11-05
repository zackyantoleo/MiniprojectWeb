Feature: Categories
  As a user i want to filter the product with categories feature

  Scenario: Select Categories
    Given Navigate to altashop homepage
    When User select categories dropdown
    And User choice categories
    Then Product with selected Categories showed

   Scenario: Clearing Categories
    Given Navigate to altashop homepage
    When User already select categories
    And User click clear categories button
    Then All product showed 