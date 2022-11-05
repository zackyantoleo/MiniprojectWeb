import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://alta-shop.vercel.app/')

WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-sign-i_3d16a9'))

WebUI.setText(findTestObject('Login/Page_frontend-web/input_Email_input-602'), 'zack@gmail.com')

WebUI.setText(findTestObject('Login/Page_frontend-web/input_Password_input-605'), 'zack123')

WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/span_Login'))

WebUI.click(findTestObject('Product/Page_frontend-web/beli_button'))

WebUI.click(findTestObject('Object Repository/Product/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-shoppi_c66ce9'))

WebUI.click(findTestObject('Product/Page_frontend-web/Increas_Button'))

WebUI.verifyElementText(findTestObject('Object Repository/Product/Page_frontend-web/span_2'), '2')

WebUI.click(findTestObject('Product/Page_frontend-web/decrease_button'))

WebUI.verifyElementText(findTestObject('Product/Page_frontend-web/span_2'), '1')

WebUI.closeBrowser()

