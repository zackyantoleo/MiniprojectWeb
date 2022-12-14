
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class loginsteps {
	@Given("Navigate to altashop homepage")
	def Navigatetoaltashophomepage() {
		WebUI.openBrowser('')

		WebUI.navigateToUrl('https://alta-shop.vercel.app/')
	}

	@When("User navigate to login page")
	def Usernavigatetologinpage() {
		WebUI.click(findTestObject('Object Repository/Login/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-sign-i_3d16a9'))
	}

	@And("User input (.*) and (.*)")
	def Userfillemailandpassword(String email, String password) {
		WebUI.setText(findTestObject('Login/Page_frontend-web/input_Email_input-602'), email)

		WebUI.setText(findTestObject('Object Repository/Login/Page_frontend-web/input_Password_input-605'), password)
	}

	@And("User click login button")
	def Clickloginbutton2() {

		WebUI.click(findTestObject('Object Repository/Login/Page_frontend-web/span_Login2'))

		WebUI.verifyElementPresent(findTestObject('Object Repository/Login/Page_frontend-web/div_AltaShop_v-select__selections'), 0)
	}

	@Then("Click login button")
	def Clickloginbutton() {

		WebUI.click(findTestObject('Object Repository/Login/Page_frontend-web/span_Login2'))

		WebUI.verifyElementPresent(findTestObject('Object Repository/Login/Page_frontend-web/div_AltaShop_v-select__selections'), 0)

		WebUI.closeBrowser()
	}

	@Then("Error message showed")
	def Errormessageshowed() {

		WebUI.verifyElementVisible(findTestObject('Login/Page_frontend-web/Login verify'), FailureHandling.STOP_ON_FAILURE)

		WebUI.closeBrowser()
	}
}