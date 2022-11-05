$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniprojectWeb/Include/features/Positive/categories.feature");
formatter.feature({
  "name": "Categories",
  "description": "  As a user i want to filter the product with categories feature",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Select Categories",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Navigate to altashop homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.Navigatetoaltashophomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select categories dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "categoriessteps.Userselectcategoriesdropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choice categories",
  "keyword": "And "
});
formatter.match({
  "location": "categoriessteps.Userchoicecategories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product with selected Categories showed",
  "keyword": "Then "
});
formatter.match({
  "location": "categoriessteps.ProductwithselectedCategoriesshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Clearing Categories",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Navigate to altashop homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "loginsteps.Navigatetoaltashophomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User already select categories",
  "keyword": "When "
});
formatter.match({
  "location": "categoriessteps.Useralreadyselectcategories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click clear categories button",
  "keyword": "And "
});
formatter.match({
  "location": "categoriessteps.Userclickclearcategoriesbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All product showed",
  "keyword": "Then "
});
formatter.match({
  "location": "categoriessteps.Allproductshowed()"
});
formatter.result({
  "status": "passed"
});
});