//
// Login Page
//

const BasePage = require("./basePage")

class LoginPage extends BasePage{

    get login_Button() { return $('//button[@class="purple__btn"]')}
    get email_Field() {return $('//input[@id="email"]')}
    get password_Field() {return $('//input[@type="password"]')}

    fillEmailAndPasswordField(){
        this.email_Field.setValue('uroskrasnic@yahoo.com')
        this.password_Field.setValue('Trening12!')
    }

    clickOnLoginButton(){
        this.click(this.login_Button)
    }
    
}

module.exports = new LoginPage()