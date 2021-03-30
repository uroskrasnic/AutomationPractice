//
//   Become a partner
//

class BecomePartnerPage {
    get signupBasic_Button() {return $('//*[@onclick="partnerSubscription("basic")"]')}
    get legalPersonName_Field() {return $('//input[@id="legal_person"]')}
    get companyName_Field() {return $('//input[@id="company_name"]')}
    get taxNumber_Field() {return $('//input[@id="vat"]')}
    get companyRegistrationNumber_Field() {return $('//input[@id="company_reg_number"]')}
    get shopName_Field() {return $('//input[@id="shop_name"]')}
    get shopEmail_Field() {return $('//input[@id="shop_email"]')}
    get shopPhone_Field() {return $('id="shop_phone"')}
    get city_Field() {return $('//input[@id="city"]')}
    get zipCode_Field() {return $('//input[@id="zip"]')}
    get address_Field() {return $('//input[@id="address"]')}
    get contiune_Button() {return $('//button[@class="purple__btn partner__btn"]')}
    get acceptTermsAndCondition_Button() {return $('class="accept-btn member"')}
    get wireTransfer_Button() {return $('//*[@class="wire__transfer--accordion payment__type--subscription btn__transparent--blue"]')}
    get membershipRegistration_Text() {return $('//*[text()="Membership registration"]')}
    get signupBronze_Button() {return $('//*[@onclick="partnerSubscription("bronze")"]')}
    get signupSilver_Button() {return $('//*[@onclick="partnerSubscription("silver")"]')}
    get signupGold_Button() {return $('//*[@onclick="partnerSubscription("gold")"]')}
    get signupDiamont_Button() {return $('//*[@onclick="partnerSubscription("gold")"]')}

}

module.exports = new BecomePartnerPage()