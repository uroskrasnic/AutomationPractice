//
//     Sign up with Facebook page
//

class signUpWithFacebookPage {
    get facebookButton() {return $('//button[@id="signInOnFacebook"]')}
    get facebookEmailField() {return $('//input[@id="email"]')}
    get facebookPasswordField() {return $('//input[@id="pass"]')}
    get signUpButton() {return $('//input[@id="u_0_0_Go"]')}

}

module.exports = new signUpWithFacebookPage()