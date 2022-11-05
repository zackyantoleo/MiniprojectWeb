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


class productsteps {
	@When("User select the product")
	def Userselecttheproduct() {
	}

	@When("User already have product in the cart and User already logged in")
	def UseralreadyhaveproductinthecartandUseralreadyloggedin() {
		WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-sign-i_3d16a9'))

		WebUI.setText(findTestObject('Login/Page_frontend-web/input_Email_input-602'), 'zack@gmail.com')

		WebUI.setText(findTestObject('Login/Page_frontend-web/input_Password_input-605'), 'zack123')

		WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/span_Login'))

		WebUI.click(findTestObject('Product/Page_frontend-web/beli_button'))

		WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-shoppi_c66ce9'))
	}

	@When("User already have product in the cart")
	def Useralreadyhaveproductinthecart() {

		WebUI.click(findTestObject('Product/Page_frontend-web/beli_button'))

		WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-shoppi_c66ce9'))
	}

	@When("User have product in the cart")
	def Userhaveproductinthecart() {

		WebUI.click(findTestObject('Product/Page_frontend-web/beli_button'))

		WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-shoppi_c66ce9'))
	}

	@And("User click beli button")
	def Userclickbelibutton() {
		WebUI.click(findTestObject('Product/Page_frontend-web/beli_button'))
	}

	@And("User click plus button")
	def Userclickplibutton() {
		WebUI.click(findTestObject('Product/Page_frontend-web/Increas_Button'))
	}

	@And("User click minus button")
	def Userclickminusbutton() {
		WebUI.click(findTestObject('Product/Page_frontend-web/Increas_Button'))

		WebUI.click(findTestObject('Product/Page_frontend-web/decrease_button'))
	}

	@And("User click pay button")
	def Userclickpaubutton() {
		WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/span_Bayar'))
	}

	@Then("Product will added to the cart")
	def Productwilladdedtothecart() {
		WebUI.click(findTestObject('Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-shopping-cart theme--dark'))

		WebUI.closeBrowser()
	}

	@Then("The ammount of product increased")
	def Theammountofproductincreased() {

		WebUI.closeBrowser()
	}

	@Then("The ammount of product decreased")
	def Theammountofproductdecreased() {

		WebUI.closeBrowser()
	}

	@Then("Product have been paid")
	def Producthavebeenpaid() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/Product/Page_frontend-web/h1_Transactions'), 0)

		WebUI.closeBrowser()
	}

	@Then("User navigate to homepage again")
	def Usernavigatetohomepageagain() {

		WebUI.closeBrowser()
	}
}