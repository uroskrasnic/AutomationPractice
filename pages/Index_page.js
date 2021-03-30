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
    

}

module.exports = new IndexPage