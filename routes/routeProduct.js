"use strict"

const productController = require('../controllers/productController');

function routeProduct(app){
    app.route('/product')
        .get(productController.getAllProducts);

    app.route('/product/:productId')
        .get(productController.getSingleProduct);
}

module.exports = {routeProduct};
