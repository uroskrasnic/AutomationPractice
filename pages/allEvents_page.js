// 
//      All Events
//

class AllEvents {

    get eventCongress_PLP() {return $('(//div[@class="card__body"])[5]')}
    get eventWorkshop_PLP() {return $('(//div[@class="card__body"])[9]')}

}

module.exports = new AllEvents()