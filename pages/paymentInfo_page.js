//
// Payment Info Page
//

class PaymentInfoPage {
    
    get wireTransfer_Button() {return $('//*[@class="wire__transfer--accordion payment__type--subscription btn__transparent--blue"]')}

}

module.exports = new PaymentInfoPage()