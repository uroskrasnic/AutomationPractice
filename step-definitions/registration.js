//
//        Registration.StepDefinitions.js
//

const { Given, When, Then } = require('cucumber');
const IndexPage = require('../pages/Index_page');
const Registration_page = require('../pages/Registration_page');

Given(/^That user is on Index page and click on Registration button$/, () => {
    IndexPage.goToLoginPage()
	IndexPage.clickOnRegistrationButton()
});

Then(/^Fill all required field with valid data$/, () => {
    Registration_page.fillAllFieldsWithData()
});

Then(/^Check confirmation checkbox$/, () => {
	Registration_page.checkConfirmationAge()
});

When(/^User click on Create Account button$/, () => {
    Registration_page.clickOnCreateAccount()
});

Then(/^Confirmation e-mail is sent$/, () => {
	IndexPage.emailConfirmationIsSent()
});

