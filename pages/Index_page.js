//
//    Index Page
//

const assert = require('assert')

class IndexPage {
    
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

    clickOnLoginIndexButton(){
        this.loginIndex_Button.click()
    }

    goToLoginPage(){
        browser.url('/')
        browser.maximizeWindow()
    }

    loginConfirmationText(){
        this.partner_DropDown.waitForDisplayed({timeout: 30000})
        const partnerText = this.partner_DropDown.getText()
        strictEqual(partnerText, 'Partner')
    }

    clickOnRegistrationButton(){
        this.registrationIndex_Button.click()
    }

    emailConfirmationIsSent(){
        this.accountVerification_Text.waitForDisplayed({timeout: 30000})
        const accountVerificationText = this.accountVerification_Text.getText()
        assert.equal(accountVerificationText, 'Account verification')
    }

    clickOnPartnerDropDown(){
        this.partner_DropDown.click()
    }

    clickOnAddWebinarButton(){
        this.addWebinar_Button.click()
    }
    
}

module.exports = new IndexPage()