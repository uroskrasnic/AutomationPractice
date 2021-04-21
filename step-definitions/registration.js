//
//        Registration.StepDefinitions.js
//

const { Given, When, Then } = require('cucumber');
const IndexPage = require('../pages/index_page');
const RegistrationPage = require('../pages/registration_page');

Given(/^That user is on Index page and click on Registration button$/, () => {
    IndexPage.goToLoginPage()
	IndexPage.clickOnRegistrationButton()
});

Then(/^Fill all required field with valid data$/, () => {
    RegistrationPage.fillAllFieldsWithData()
});

Then(/^Check confirmation checkbox$/, () => {
	RegistrationPage.checkConfirmationAge()
});

When(/^User click on Create Account button$/, () => {
    RegistrationPage.clickOnCreateAccount()
});

Then(/^Confirmation e-mail is sent$/, () => {
	IndexPage.emailConfirmationIsSent()
});

