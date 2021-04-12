//
//    Index Page
//

class IndexPage {
    
    get partner_DropDown() {return $('//*[@id="test-partner"]')}
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

}

module.exports = new IndexPage