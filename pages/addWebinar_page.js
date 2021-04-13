//
//            Add Webinar Page
//

class AddWebinar {

    get selectTime_Calendar() {return $('//span[@class="placeholder ng-tns-c161-29 time-selected"]')}
    get title_Field() {return $('//input[@id="title"] ')}
    get language_Picker() {return $('//div[@class="language-picker-wrapper form"]')}
    get url_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-5 ng-star-inserted"]')}
    get price_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-7 ng-star-inserted"] ')}
    get description_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-2 ng-star-inserted"]')}
    get intro_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-3 ng-star-inserted"]')}
    get speakers_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-10 ng-star-inserted"]')}
    get organizers_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-10 ng-star-inserted"]')}
    get whatWillYouLearn_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-14 ng-star-inserted"]')}
    get sponsors_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-18 ng-star-inserted"]')}
    get partners_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-20 ng-star-inserted"]')}
    get urlTrailer_Field() {return $('//input[@id="url-trailer"]')}
    get zoomUrl_Field() {return $('//input[@id="url-url"]')}
    get zoomPassword_Field() {return $('//input[@id="url-pass"]')}
    get priceName_Field() {return $('//input[@id="price-name-0"]')}
    get priceInEuro_Field() {return $('//input[@id="price-price-0"]')}
    get bussinesValueInPercentage_Field() {return $('//input[@id="price-bv-0"]')}
    get quantity_Field() {return $('//input[@id="price-quantity-0"]')}
    get stockAvailbillity_Field() {return $('//input[@id="price-stock_availability-0"]')}
    get offerIncludes_Field() {return $('//input[@id="description-0"]')}
    get description_TextArea() {return $('//div[@class="ql-editor ql-blank"]')}
    get intro_TextArea() {return $('//textarea[@class="ng-tns-c199-1 ng-pristine ng-valid ng-touched"]')}
    get organizatorsMail_Field() {return $('//input[@class="ng-tns-c180-9 ng-pristine ng-valid ng-touched"]')}
    get organizatorsName_Field() {return $('//input[@id="organizersfirst-name-0"]')}
    get organizatorsSurname_Field() {return $('//input[@id="organizers-surname-0"]')}
    get organizatorsTitle_Field() {return $('//input[@id="organizers-title-0"]')}
    get speakersMail_Field() {return $('//input[@id="speakers-email-0"]')}
    get speakersName_Field() {return $('//input[@id="speakersfirst-name-0"]')}
    get speakersSurname_Field() {return $('//input[@id="speakers-surname-0"]')}
    get speakersTitle_Field() {return $('//input[@id="speakers-title-0"]')}
    get whatWillYouLear_Field() {return $('//input[@id="what you will learn-0"]')}
    get sponsorsName_Field() {return $('//input[@id="sponsors-name-0"]')}
    get sponsorsUrl_Field() {return $('//input[@id="sponsors-url-0"]')}
    get partnersName_Field() {return $('//input[@id="partners-name-0"]')}
    get partnersUrl_Field() {return $('//input[@id="partners-url-0"]')}
    get saveDraft_Button() {return $('//button[@class="action-button btn-save btn-border-radius btn-dark mat-button mat-button-base btn-disabled"]')}
    get publish_Button() {return $('//button[@class="action-button btn-publish btn-border-radius btn-dark mat-button mat-button-base"]')}
    get addCoverImage_Button() {return $('(//span[@class="ng-tns-c199-1"])[1]')}
    get addThumbailImage_Button() {return $('(//span[@class="ng-tns-c199-1"])[2]')}

}

module.exports = new AddWebinar()