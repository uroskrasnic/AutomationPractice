//
//  Registration Page
//

var randomWords = require('random-words');
const { UserPassword, LastName } = require('../config/data/userData');
const BasePage = require('./basePage');

class RegistrationPage extends BasePage{
    
    get firstName_Field() {return $('//input[@id="first_name"]')}
    get lastName_Field() {return $('//input[@id="last_name"]')}
    get email_Field() {return $('//input[@id="email2"]')}
    get password_Field() {return $('//input[@id="pass"]')}
    get retypePassword_Filed() {return $('//input[@id="retype_password"]')}
    get affiliateCode_Field() {return $('//input[@id="affiliate_code"]')}
    get confirmationAge_Checkbox() {return $('//input[@id="age-checkbox"]')}
    get createAccount_Button() {return $('//*[@id="create-acc"]')}

   fillAllFieldsWithData(){
       this.setValue(this.firstName_Field, randomWords())
       this.setValue(this.lastName_Field, LastName)
       this.setValue(this.email_Field, (randomWords() + '@yopmail.com'))
       this.setValue(this.password_Field, UserPassword)
       this.setValue(this.retypePassword_Filed, UserPassword)
    }

    checkConfirmationAge(){
        this.click(this.confirmationAge_Checkbox)
    }

    clickOnCreateAccount(){
        this.click(this.createAccount_Button)
    }
   
}

module.exports = new RegistrationPage()