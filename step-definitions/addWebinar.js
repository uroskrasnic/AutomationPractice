//
// AddWebinar.StepDefinition.js
//

const { Given, When, Then } = require('cucumber');
const IndexPage = require('../pages/index_page');
const AddWebinarPage = require('../pages/addWebinar_page');
const LoginPage = require('../pages/login_page');

Given(/^That User is logged in into SLP$/, () => {
	IndexPage.goToLoginPage()
	IndexPage.clickOnLoginIndexButton()
    LoginPage.fillEmailAndPasswordField()
    LoginPage.clickOnLoginButton()
});

Then(/^Navigate to Partner Dropdown menu and click on Add Webinar button$/, () => {
	IndexPage.clickOnPartnerDropDown()
	IndexPage.clickOnAddWebinarButton()
});

When(/^Click on Select Shop and choose Shop from Dropdown menu$/, () => {
	AddWebinarPage.selectShop()
});

Then(/^Click on Save button$/, () => {
	AddWebinarPage.saveSelectedShop()
});

Then(/^On Add Webinar page in header section fill all required content$/, () => {
	AddWebinarPage.titleText()
	AddWebinarPage.dateSet()
	//AddWebinarPage.addCoverImage()
	//AddWebinarPage.addThumbnailImage()
});

Then(/^Fill all mandatory fields about Link,Price,Description,Organizers,Speakers etc$/, () => {
	AddWebinarPage.fillUrlDropDown()
	AddWebinarPage.fillPriceDropDown()
	AddWebinarPage.descriptionInsertText()
	AddWebinarPage.introInsertText()
	AddWebinarPage.fillOrganizersDropDown()
	AddWebinarPage.fillSpeakersDropDown()
	AddWebinarPage.fillWWYLDropDown()
	AddWebinarPage.fillFrequentlyAskedQuestion()
	AddWebinarPage.fillSponsorsDropDown()
	AddWebinarPage.fillPartnersDropDown()
	AddWebinarPage.fillBulletpointsDropDown()
});

When(/^User finished and click on Save Draft then on Publish button$/, () => {
	AddWebinarPage.saveDraftAndPublish()
});

Then(/^Publication request is sent$/, () => {
    AddWebinarPage.publishRequestSent()
});
