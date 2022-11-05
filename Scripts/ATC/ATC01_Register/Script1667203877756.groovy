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

WebUI.click(findTestObject('Object Repository/Register/Page_frontend-web/i_AltaShop_v-icon notranslate fas fa-sign-i_3d16a9'))

WebUI.click(findTestObject('Object Repository/Register/Page_frontend-web/a_Register'))

WebUI.setText(findTestObject('Register/Page_frontend-web/input_Nama Lengkap_input-613'), 'zackweb')

int RN

RN = ((Math.random() * 500) as int)

WebUI.setText(findTestObject('Register/Page_frontend-web/input_Email_input-616'), ('zackweb' + RN) + '@gmail.com')

WebUI.setText(findTestObject('Register/Page_frontend-web/input_Password_input-619'), 'zack123')

WebUI.click(findTestObject('Register/Page_frontend-web/Regis_but'))

WebUI.verifyElementPresent(findTestObject('Object Repository/Register/Page_frontend-web/div_Login'), 0)

WebUI.closeBrowser()

