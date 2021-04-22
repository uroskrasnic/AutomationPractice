//
// Add Webinar Page
//

var randomWords = require('random-words');
const IndexPage = require("./index_page")
const path = require('path');
const BasePage = require('./basePage');
const titleAndLinksData = require('../config/data/titleAndLinksData');
const priceData = require('../config/data/priceData');
const organizersAndSpeakersData = require('../config/data/organizersAndSpeakersData');
const sponsorsAndPartnersData = require('../config/data/sponsorsAndPartnersData');

class AddWebinar extends BasePage{

    get selectTime_Calendar() {return $('//span[@class="placeholder ng-tns-c161-29 time-selected"]')}
    get title_Field() {return $('//input[@id="title"] ')}
    get language_Picker() {return $('//div[@class="language-picker-wrapper form"]')}
    get url_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-30 ng-star-inserted"]')}
    get price_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-32 ng-star-inserted"]')}
    get intro_DropDown() { return $('//div[text()="Intro"]')}
    get description_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-27 ng-star-inserted"]')}
    get speakers_DropDown() {return $('//*[@class="ng-tns-c97-37"and text()="Speakers"]')}
    get organizers_DropDown() {return $('//div[text()="Organizers"]')}
    get sponsors_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-43 ng-star-inserted"]')}
    get partners_DropDown() {return $('//div[@class="accordion-header ng-tns-c97-45 ng-star-inserted"]')}
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
    get intro_TextArea() {return $('(//*[@class="ng-tns-c199-3 ng-pristine ng-valid ng-touched"])[2]')}
    get organizatorsMail_Field() {return $('//input[@id="organizers-email-0"]')}
    get organizatorsName_Field() {return $('//input[@id="organizersfirst-name-0"]')}
    get intro_Field() { return $('//*[@formcontrolname="intro"]') }
    get organizatorsSurname_Field() {return $('//input[@id="organizers-surname-0"]')}
    get organizatorsTitle_Field() {return $('//input[@id="organizers-title-0"]')}
    get speakersMail_Field() {return $('//input[@id="speakers-email-0"]')}
    get speakersName_Field() {return $('//input[@id="speakersfirst-name-0"]')}
    get speakersSurname_Field() {return $('//input[@id="speakers-surname-0"]')}
    get speakersTitle_Field() {return $('//input[@id="speakers-title-0"]')}
    get whatWillYouLearn_DropDown() {return $('//div[text()="What you will learn"]')}
    get sponsorsName_Field() {return $('//input[@id="sponsors-name-0"]')}
    get sponsorsUrl_Field() {return $('//input[@id="sponsors-url-0"]')}
    get partnersName_Field() {return $('//input[@id="partners-name-0"]')}
    get partnersUrl_Field() {return $('//input[@id="partners-url-0"]')}
    get saveDraft_Button() {return $('//*[@class="mat-button-wrapper"and text()="Save draft"]')}
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
    get setTheDate_Field() {return $('//span[@class="placeholder ng-tns-c161-29"]')}
    get saveCalendarButton() {return $('//*[@class="r-btns r-save ng-tns-c161-49 mat-flat-button mat-button-base"]')}
    get specialPrice_Field() {return $('//input[@id="price-special-0"]')}
    get specialPriceFromTo_Button() {return $('//*[@class="ng-tns-c174-31 ng-tns-c161-49"]')}
    get organizerOgrnization_Field() {return $('//input[@id="undefined-name-0"]')}
    get WYWLField() {return $('//input[@id="what you will learn-0"]')}
    get FAQQuestion_Field() {return $('//*[@id="faq-0"]')}
    get awesome_Checkbox() {return $('//*[@id="bulletpoints-awesome"]')}
    get plusOne_Checkbox() {return $('//*[@id="bulletpoints-plus-one"]')}
    get speakers_Checkbox() {return $('//*[@id="bulletpoints-speakers"]')}
    get FAQAnswer_Field() {return $('//*[@id="faq-answer-0"]')}
    get frequentlyAskedQuestions_DropDown() {return $('//*[text()="Frequently asked questions"]')}
    get bulletpoints_Dropdown() {return $('//*[text()="Bulletpoints"]')}

    selectShop(){
        this.click(this.selectShop_DropDown)
        this.click(this.shopInserted_Button)
    }

    saveSelectedShop(){
        this.click(this.saveSelectedShop_Button)
    }

    titleText(){
        this.setValue(this.title_Field, titleAndLinksData.WebinarTitle)
    }

    dateSet(){
        this.click(this.setTheDate_Field)
        this.click(this.date_Calendar)
        this.click(this.save_Button)
    }

    addCoverImage(){
        this.click(this.addCoverImage_Button)
        browser.pause(3000)
        const ImageUpload = this.addCoverImage_Button
        browser.execute(
            (el) => el.style.display = 'block',
            ImageUpload
        )
        const ImagePath = '/home/uros/Pictures/Qa1.png'
        const remoteImagePath = browser.uploadFile(ImagePath)
        this.addCoverImage_Button.setValue(remoteImagePath)
    }

    addThumbnailImage(){
        this.click(this.addThumbailImage_Button)
        browser.pause(3000)
        const ImageUpload = this.addThumbailImage_Button
        browser.execute(
            (el) => el.style.display = 'block',
            ImageUpload
        )
        const ImagePath = '/home/uros/Pictures/qa2.png'
        const remoteImagePath = browser.uploadFile(ImagePath)
        this.addThumbailImage_Button.setValue(remoteImagePath)
        
    }

    fillUrlDropDown(){
        this.click(this.url_DropDown)
        this.setValue(this.urlTrailer_Field, titleAndLinksData.UrlTrailer)
        this.setValue(this.zoomUrl_Field, titleAndLinksData.ZoomUrl)
        this.setValue(this.zoomPassword_Field, titleAndLinksData.ZoomPassword)
    }

    fillPriceDropDown(){
        this.click(this.price_DropDown)
        this.setValue(this.priceName_Field, priceData.PriceName)
        this.setValue(this.priceInEuro_Field, priceData.PriceInEuro)
        this.setValue(this.bussinesValueInPercentage_Field, priceData.BVInPercentage)
        this.setValue(this.quantity_Field, priceData.Quantity)
        this.setValue(this.stockAvailbillity_Field, priceData.StockAvailbillity)
        this.setValue(this.specialPrice_Field, priceData.SpecialPrice)
        this.click(this.specialPriceFromTo_Button)
        this.click(this.date_Calendar)
        this.click(this.saveCalendarButton)
        this.setValue(this.offerIncludes_Field, priceData.OfferIncludes)
    }

    descriptionInsertText(){
        this.click(this.description_DropDown)
        this.click(this.description_TextArea)
        this.setValue(this.description_TextArea, randomWords({exactly: 100, maxLength: 8}))
    }

    introInsertText(){
        this.click(this.intro_DropDown)
        this.setValue(this.intro_Field, randomWords({exactly: 20, maxLength: 8}))
    }

    fillOrganizersDropDown(){
        this.click(this.organizers_DropDown)
        this.setValue(this.organizatorsMail_Field, organizersAndSpeakersData.OrganizersMail)
        this.setValue(this.organizerOgrnization_Field, organizersAndSpeakersData.OrganizersOrganization)
        this.setValue(this.organizatorsName_Field, organizersAndSpeakersData.OrganizersName)
        this.setValue(this.organizatorsSurname_Field, organizersAndSpeakersData.OrganizersSurname)
        this.setValue(this.organizatorsTitle_Field, organizersAndSpeakersData.OrganizersTitle)
    }

    fillSpeakersDropDown(){
        this.click(this.speakers_DropDown)
        this.setValue(this.speakersMail_Field, organizersAndSpeakersData.SpeakersMail)
        this.setValue(this.speakersName_Field, organizersAndSpeakersData.SpeakersName)
        this.setValue(this.speakersSurname_Field, organizersAndSpeakersData.SpeakersSurname)
        this.setValue(this.speakersTitle_Field, organizersAndSpeakersData.SpeakersTitle)
    }

    fillWWYLDropDown(){
        this.click(this.whatWillYouLearn_DropDown)
        this.setValue(this.WYWLField, sponsorsAndPartnersData.WhatYouWillLearn)
    }

    fillFrequentlyAskedQuestion(){
        this.click(this.frequentlyAskedQuestions_DropDown)
        this.setValue(this.FAQQuestion_Field, sponsorsAndPartnersData.Question)
        this.setValue(this.FAQAnswer_Field, sponsorsAndPartnersData.Answer)
    }

    fillSponsorsDropDown(){
        this.click(this.sponsors_DropDown)
        this.setValue(this.sponsorsName_Field, sponsorsAndPartnersData.SponsorsName)
        this.setValue(this.sponsorsUrl_Field, sponsorsAndPartnersData.SponsorsUrl)
    }

    fillPartnersDropDown(){
        this.click(this.partners_DropDown)
        this.setValue(this.partnersName_Field, sponsorsAndPartnersData.PartnersName)
        this.setValue(this.partnersUrl_Field, sponsorsAndPartnersData.PartnersUrl)
    }

    fillBulletpointsDropDown(){
        this.click(this.bulletpoints_Dropdown)
        this.click(this.awesome_Checkbox)
        this.click(this.plusOne_Checkbox)
        this.click(this.speakers_Checkbox)
    }

    saveDraftAndPublish(){
        this.click(this.saveDraft_Button)
        this.click(this.publish_Button)
    }

    publishRequestSent(){
        const publicationRequestedText = this.getText(this.publicationRequested_Text)
        assert.equal(publicationRequestedText, 'Publication requested')
    }
}

module.exports = new AddWebinar()