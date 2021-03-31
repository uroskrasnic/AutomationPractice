//
//        Membership registration
//

class MembershipRegistrationPage {
    get membershipRegistration_Text() {return $('//*[text()="Membership registration"]')}

}

module.exports = new MembershipRegistrationPage()