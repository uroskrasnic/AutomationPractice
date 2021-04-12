//
//           Shop Settings Page
//

    class ShopSettings {

        get selectShop_DropDown() {return $('(//div[@id="open-type-picker"])[2]')}
        get description_DropDown() {return $('(//div[@class="section-column s-column"])[5]')}
        get description_TextArea() {return $('//div[@class="ql-editor ql-blank"]')}
        get intro_DropDown() {return $('(//div[@class="section-column s-column"])[6]')}
        get intro_TextArea() {return $('//textarea[@class="ng-pristine ng-valid ng-touched"]')}
        get requestShopApproval_Button() {return $('//button[@class="shop-approve__btn ng-star-inserted"]')}
        get shopStats_Text() {return $('//span[@class="ng-star-inserted"]')}
        
    }

    module.exports = new ShopSettings()



