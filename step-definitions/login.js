//
//       Login.StepDefinitions.js
//

const { Given, When, Then } = require('cucumber');
const IndexPage = require('../pages/Index_page');
const LoginPage = require('../pages/Login_page');

Given(/^That user click on Login button$/, () => {
	IndexPage.goToLoginPage()
	IndexPage.clickOnLoginIndexButton()
});
Then(/^Fill both field with valid data$/, () => {
	LoginPage.fillEmailAndPasswordField()
});

When(/^User click on Login button$/, () => {
	LoginPage.clickOnLoginButton()
});

Then(/^User is successifully logged in$/, () => {
	IndexPage.loginConfirmationText()
});

When(/^Click on Facebook icon$/, () => {
	return true;
});

When(/^Fill e-mail\/phone field with valid data$/, () => {
	return true;
});

When(/^Fill password field with Facebook password$/, () => {
	return true;
});

When(/^User click on Prijavite se button$/, () => {
	return true;
});
