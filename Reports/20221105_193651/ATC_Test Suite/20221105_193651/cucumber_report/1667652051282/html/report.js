$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniprojectWeb/Include/features/Positive/product.feature");
formatter.feature({
  "name": "Product",
  "description": "  As a user i want to Add product to Cart\n  Incresing and decreasing total ammount of the product\n  Pay the product form the cart",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Product to Cart",
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
  "name": "User select the product",
  "keyword": "When "
});
formatter.match({
  "location": "productsteps.Userselecttheproduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click beli button",
  "keyword": "And "
});
formatter.match({
  "location": "productsteps.Userclickbelibutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product will added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "productsteps.Productwilladdedtothecart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Increasing Total Product in the Cart",
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
  "name": "User already have product in the cart",
  "keyword": "When "
});
formatter.match({
  "location": "productsteps.Useralreadyhaveproductinthecart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click plus button",
  "keyword": "And "
});
formatter.match({
  "location": "productsteps.Userclickplibutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ammount of product increased",
  "keyword": "Then "
});
formatter.match({
  "location": "productsteps.Theammountofproductincreased()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Decreasing Total Product in the Cart",
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
  "name": "User already have product in the cart",
  "keyword": "When "
});
formatter.match({
  "location": "productsteps.Useralreadyhaveproductinthecart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click minus button",
  "keyword": "And "
});
formatter.match({
  "location": "productsteps.Userclickminusbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The ammount of product decreased",
  "keyword": "Then "
});
formatter.match({
  "location": "productsteps.Theammountofproductdecreased()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay product from Cart",
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
  "name": "User already have product in the cart and User already logged in",
  "keyword": "When "
});
formatter.match({
  "location": "productsteps.UseralreadyhaveproductinthecartandUseralreadyloggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click pay button",
  "keyword": "And "
});
formatter.match({
  "location": "productsteps.Userclickpaubutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product have been paid",
  "keyword": "Then "
});
formatter.match({
  "location": "productsteps.Producthavebeenpaid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay product from Cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
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
  "name": "User already have product in the cart",
  "keyword": "When "
});
formatter.match({
  "location": "productsteps.Useralreadyhaveproductinthecart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click pay button",
  "keyword": "And "
});
formatter.match({
  "location": "productsteps.Userclickpaubutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to homepage again",
  "keyword": "Then "
});
formatter.match({
  "location": "productsteps.Usernavigatetohomepageagain()"
});
formatter.result({
  "status": "passed"
});
});