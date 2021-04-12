// 
//         Calendar Page
//

class Calendar {

    get date_Calendar() {return $('(//div[@class="mat-calendar-body-cell-content"])[45]')}
    get save_Button() {return $('//button[@class="r-btns r-save ng-tns-c161-29 mat-flat-button mat-button-base"]')}

}

module.exports = new Calendar()