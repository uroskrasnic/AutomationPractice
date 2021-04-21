//
//    Index Page
//

const assert = require('assert')
const BasePage = require('./basePage')

class IndexPage extends BasePage{
    
    get partner_DropDown() {return $('//a[@title="Partner"]')}
    get becomePartner_Button() {return $('//*[@href="/en/become_partner/partner_subscription"]')}
    get loginIndex_Button() {return $('//*[@href="/login"]')}
    get registrationIndex_Button() {return $('//*[@class="header__signup"]')}
    get events_DropDown() {return $('//*[@title="Events"]')}
    get allEvents_Button() {return $('//*[@src="/static/img/icons/temp_header_icons/event.svg"]')}
    get profilIcon_Image() {return $('//img[@id="test-avatar-icon"]')}
    get shoppingCart_Icon() {return $('//*[@class="cart"]')}
    get language_DropDown() {return $('//*[@class="current-flag"]')}
    get englishLanguage_Button() {return $('//*[@id="change-language-en"]')}
    get addShop_Button() {return $('//*[@href="/en/profile/add-shop"]')}
    get searchBox_Field() {return $('//*[@class="search-field toggle-color"]')}
    get shops_Button() {return $('//img[@src="/static/img/shop.svg"]')}
    get userName() {return $('//p[@class="user--name"]')}
    get accountVerification_Text() {return $('//h1[text()="Account verification"]')}
    get addWebinar_Button() {return $('//a[@href="/en/partners/webinars/add"]')}

    goToLoginPage(){
        browser.url('/')
        browser.maximizeWindow()
    }

    clickOnLoginIndexButton(){
        this.click(this.loginIndex_Button)
    }

    loginConfirmationText(){
        const partnerText = this.getText(this.partner_DropDown)
        strictEqual(partnerText, 'Partner')
    }

    clickOnRegistrationButton(){
        this.click(this.registrationIndex_Button)
    }

    emailConfirmationIsSent(){
        const accountVerificationText = this.getText(this.accountVerificationText)
        assert.equal(accountVerificationText, 'Account verification')
    }

    clickOnPartnerDropDown(){
        this.click(this.partner_DropDown)
    }

    clickOnAddWebinarButton(){
        this.click(this.addWebinar_Button)
    }
}

module.exports = new IndexPage()