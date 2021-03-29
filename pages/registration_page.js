//
//  Registration Page
//

class RegistrationPage {
    get firstName_Field() {('//input[@id="first_name"]')}
    get lastName_Field() {('//input[@id="last_name"]')}
    get email_Field() {('//input[@id="email2"]')}
    get password_Field() {('//input[@id="pass"]')}
    get retypePassword_Filed() {('//input[@id="retype_password"]')}
    get affiliateCode_Field() {('//input[@id="affiliate_code"]')}
    get confirmationAge_Checkbox() {('//input[@id="age-checkbox"]')}
    get createAccount_Button() {('id="create-acc"')}

}

module.exports = new RegistrationPage()