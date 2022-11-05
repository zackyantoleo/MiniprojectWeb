$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniprojectWeb/Include/features/Positive/logout.feature");
formatter.feature({
  "name": "Logut",
  "description": "  As a user i want to logout an account",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Logout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Navigate to altashop homepage and User already logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "logoutsteps.Useralreadyloggedin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile icon at navbar",
  "keyword": "When "
});
formatter.match({
  "location": "logoutsteps.Userclickprofileiconatnavbar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click logout option",
  "keyword": "And "
});
formatter.match({
  "location": "logoutsteps.Userclicklogoutoption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "logoutsteps.Usernavigatetohomepage()"
});
formatter.result({
  "status": "passed"
});
});