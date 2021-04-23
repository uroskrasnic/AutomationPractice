//
// Partner Subscriptions Page
//

class PartnerSubscriptionPage {
    
    get signupBasic_Button() {return $('//*[@onclick="partnerSubscription("basic")"]')}
    get signupBronze_Button() {return $('//*[@onclick="partnerSubscription("bronze")"]')}
    get signupSilver_Button() {return $('//*[@onclick="partnerSubscription("silver")"]')}
    get signupGold_Button() {return $('//*[@onclick="partnerSubscription("gold")"]')}
    get signupDiamont_Button() {return $('//*[@onclick="partnerSubscription("gold")"]')}
    
}

module.exports = new PartnerSubscriptionPage()