//
// Login Page
//

class LoginPage {

    get login_Button() { return $('//button[@class="purple__btn"]')}
    get email_Field() {return $('//input[@id="email"]')}
    get password_Field() {return $('//input[@type="password"]')}

}

module.exports = new LoginPage()