//
//            Add Webinar Page
//

var randomWords = require('random-words');
const Index_page = require("./Index_page")

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
    get selectShop_DropDown() {return $('//div[@class="type-wrapper form select"]')}
    get shopInserted_Button() {return $('//*[@class="type-selected ng-star-inserted"]')}
    get saveSelectedShop_Button() {return $('//button[@id="date-save"]')}
    get publicationRequested_Text() {return $('//span[@class="btn-published ng-star-inserted"]')}
    get addCoverImage_Button() {return $('//*[text()="Add cover image"]')}
    get addThumbnailImage_Button() {return $('//*[text()="Add thumbnail image"]')}
    get date_Calendar() {return $('(//div[@class="mat-calendar-body-cell-content"])[45]')}
    get save_Button() {return $('//button[@class="r-btns r-save ng-tns-c161-29 mat-flat-button mat-button-base"]')}

    selectShop(){
        this.selectShop_DropDown.click()
        this.shopInserted_Button.click()
    }

    saveSelectedShop(){
        this.saveSelectedShop_Button.click()
    }

    titleText(){
        this.title_Field.setValue('Automation Practice')
    }

    dateSet(){
        this.date_Calendar.click()
        this.saveButtonInCalendar_Button.click()
    }

    addCoverImage(){
        this.addCoverImage_Button.click()

    }

    addThumbnailImage(){
        this.addThumbailImage_Button.click()
    }

    fillUrlDropDown(){
        this.url_DropDown.click()
        this.urlTrailer_Field.setValue('https://www.youtube.com/watch?v=zTs2EPoAs2w')
        this.zoomUrl_Field.setValue('https://us02web.zoom.us/j/83532044215?pwd=dS8wWW42Y3luTUJjQmZ2MyswWVd1dz09')
        this.zoomPassword_Field.setValue('Webinar123')
    }

    fillPriceDropDown(){
        this.priceName_Field.setValue('VIP')
        this.priceInEuro_Field.setValue('50')
        this.bussinesValueInPercentage_Field.setValue('5')
        this.quantity_Field.setValue('100')
        this.stockAvailbillity_Field.setValue('90')
        this.specialPrice_Field.setValue('40')
        this.specialPriceFromTo_Button.click()
        this.selectTime_Calendar.click()
        this.saveButtonInCalendar_Button.click()
        this.offerIncludes_Field.setValue('PDF')
    }

    descriptionInsertText(){
        this.description_DropDown.click()
        this.description_TextArea.setValue(randomWords({minLenght: 500}))
    }

    addRelatedFiles(){
        this.relatedFiles_DropDown.click()
        this.addNewRelatedFiles_Button.click()
    }

    introInsertText(){
        this.intro_DropDown.click()
        this.intro_TextArea.setValue(randomWords({minLenght: 50}))
    }

    fillOrganizersDropDown(){
        this.organizers_DropDown.click()
        this.organizersMail_Field.setValue('marko@yopmail.com')
        this.organizersOrganization.setValue('Bloxico')
        this.organizersName_Field.setValue('Marko')
        this.organizersSurname_Field.setValue('Cvorovic')
        this.organizersTitle_Field.setValue('Mr')
    }

    fillSpeakersDropDown(){
        this.speakers_DropDown.click()
        this.speakersMail_Field.setValue('filip@yopmail.com')
        this.speakersName_Field.setValue('Filip')
        this.speakersSurname_Field.setValue('Vidakovic')
        this.speakersTitle_Field.setValue('Mr')
    }

    fillWWYLDropDown(){
        this.whatWillYouLearn_DropDown.click()
        this.whatWillYouLearn_Field.setValue('All about Automation Test')
    }

    fillFrequentlyAskedQuestion(){
        this.frequentlyAskedQuestionsDropDown.click()
        this.FAQQuestion_Field.setValue('Can I use Screen Cast during Webinar')
        this.FAQAnswer_Field.setValue('No')
    }

    fillSponsorsDropDown(){
        this.sponsors_DropDown.click()
        this.sponsorsName_Field.setValue('Jovana Radojkovic')
        this.sponsorsUrl_Field.setValue('PrimeVigelance.com')
    }

    fillPartnersDropDown(){
        this.partners_DropDown.click()
        this.partnersName_Field.setValue('Ognjen Dokmanovic')
        this.partnersUrl_Field.setValue('Bloxico.com')
    }

    fillBulletpointsDropDown(){
        this.bulletpoints_Dropdown.click()
        this.awesome_Checkbox.click()
        this.plusOne_Checkbox.click()
        this.speakers_Checkbox.click()
    }

    saveDraftAndPublish(){
        this.saveDraft_Button.click()
        this.publish_Button.click()
    }

    publishRequestSent(){
        this.publicationRequested_Text.waitForDisplayed({timeout: 30000})
        const publicationRequestedText = this.publicationRequested_Text.getText()
        assert.equal(publicationRequestedText, 'Publication requested')
    }
    

}

module.exports = new AddWebinar()