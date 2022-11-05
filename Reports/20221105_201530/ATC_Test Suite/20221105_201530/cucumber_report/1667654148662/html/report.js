$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Athif/git/MiniprojectWeb/Include/features/Positive/login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user i want to login with my registered account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid data",
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
  "name": "User input \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "zack@gmail.com",
        "zack123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid data",
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
  "name": "User input zack@gmail.com and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with false data",
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
  "name": "User input \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "zack@gmail.com",
        "aaaaaaa"
      ]
    },
    {
      "cells": [
        "zackweb",
        "zack123"
      ]
    },
    {
      "cells": [
        "zack123",
        "zack@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with false data",
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
  "name": "User input zack@gmail.com and aaaaaaa",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Errormessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with false data",
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
  "name": "User input zackweb and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Errormessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with false data",
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
  "name": "User input zack123 and zack@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Errormessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with false data",
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
  "name": "User input \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "",
        "zack123"
      ]
    },
    {
      "cells": [
        "zack@gmail.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with false data",
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
  "name": "User input  and zack123",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Errormessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with false data",
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
  "name": "User input zack@gmail.com and ",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Errormessageshowed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with false data",
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
  "name": "User input  and ",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Userfillemailandpassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginsteps.Clickloginbutton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message showed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.Errormessageshowed()"
});
formatter.result({
  "status": "passed"
});
});