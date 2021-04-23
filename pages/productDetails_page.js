// 
// Product Details Page
//

class ProductDetails {

    get addToCart_Button() {return $('//a[@class="btn-purple product__prices-scroll"]')}
    get addToCartPrice_Button() {return $('//a[@class="add-to-bucket add-to-bucket-card-price product__prices btn-purple-lg"]')}

}

module.exports = new ProductDetails()










