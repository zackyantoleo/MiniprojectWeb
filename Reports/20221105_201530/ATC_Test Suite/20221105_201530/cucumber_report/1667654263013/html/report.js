$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniprojectWeb/Include/features/Positive/register.feature");
formatter.feature({
  "name": "Register",
  "description": "As a new user i want to register an account first",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigate to altashop homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigate to login page",
  "keyword": "When "
});
formatter.step({
  "name": "User open register form",
  "keyword": "And "
});
formatter.step({
  "name": "Input new \u003cfullname\u003e and \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click register button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "zackweb",
        "zackweb12d@gmail.com",
        "zack123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User navigate to login page",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.Usernavigatetologinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open register form",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Useropenregisterform()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input new zackweb and zackweb12d@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.UserInputFullnameEmailPassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register button",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Clickregisterbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Register with empty data",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "User navigate to login page",
  "keyword": "When "
});
formatter.step({
  "name": "User open register form",
  "keyword": "And "
});
formatter.step({
  "name": "Input new \u003cfullname\u003e and \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "name": "Error register message showed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "",
        "zackweb@gmail.com",
        "zack123"
      ]
    },
    {
      "cells": [
        "zack",
        "",
        "zack123"
      ]
    },
    {
      "cells": [
        "zack",
        "zackweb@gmail.com",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register with empty data",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "User navigate to login page",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.Usernavigatetologinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open register form",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Useropenregisterform()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input new  and zackweb@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.UserInputFullnameEmailPassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click register button",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userclickregisterbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error register message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Errorregistermessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register with empty data",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "User navigate to login page",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.Usernavigatetologinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open register form",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Useropenregisterform()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input new zack and  and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.UserInputFullnameEmailPassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click register button",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userclickregisterbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error register message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Errorregistermessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register with empty data",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "User navigate to login page",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.Usernavigatetologinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open register form",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Useropenregisterform()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input new zack and zackweb@gmail.com and ",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.UserInputFullnameEmailPassword(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click register button",
  "keyword": "And "
});
formatter.match({
  "location": "registersteps.Userclickregisterbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error register message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "registersteps.Errorregistermessageshowed()"
});
formatter.result({
  "status": "passed"
});
});