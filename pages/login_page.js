//
// Login Page
//

const userData = require("../config/data/userData")
const BasePage = require("./basePage")

class LoginPage extends BasePage{

    get login_Button() { return $('//button[@class="purple__btn"]')}
    get email_Field() {return $('//input[@id="email"]')}
    get password_Field() {return $('//input[@type="password"]')}

    fillEmailAndPasswordField(){
        this.email_Field.setValue(userData.UserMail)
        this.password_Field.setValue(userData.UserPassword)
    }

    clickOnLoginButton(){
        this.click(this.login_Button)
    }
    
}

module.exports = new LoginPage()