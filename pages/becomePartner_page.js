//
//   Become a Partner Page
//

class BecomePartnerPage {

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
    get continue_Button() {return $('//button[@class="purple__btn partner__btn"]')}
    get country_DropDown() {return $('//select[@id="country"]')}
    get serbia_List() {return $('(//option[@value="Serbia"])[1]')}

}

module.exports = new BecomePartnerPage()