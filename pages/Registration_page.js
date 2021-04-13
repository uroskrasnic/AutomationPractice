//
//  Registration Page
//

var randomWords = require('random-words');

class RegistrationPage {
    
    get firstName_Field() {return $('//input[@id="first_name"]')}
    get lastName_Field() {return $('//input[@id="last_name"]')}
    get email_Field() {return $('//input[@id="email2"]')}
    get password_Field() {return $('//input[@id="pass"]')}
    get retypePassword_Filed() {return $('//input[@id="retype_password"]')}
    get affiliateCode_Field() {return $('//input[@id="affiliate_code"]')}
    get confirmationAge_Checkbox() {return $('//input[@id="age-checkbox"]')}
    get createAccount_Button() {return $('//*[@id="create-acc"]')}

   fillAllFieldsWithData(){
       this.firstName_Field.setValue(randomWords()) 
       this.lastName_Field.setValue('Milosevic')
       this.email_Field.setValue(randomWords() + '@yopmail.com')
       this.password_Field.setValue('Trening12!')
       this.retypePassword_Filed.setValue('Trening12!')
    }

    checkConfirmationAge(){
        this.confirmationAge_Checkbox.click()
    }

    clickOnCreateAccount(){
        this.createAccount_Button.click()
    }
   
}

module.exports = new RegistrationPage()