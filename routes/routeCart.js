"use strict"

const cartController = require('../controllers/cartController');

function routeCart(app){
    app.route('/cart')
        .get(cartController.getAllCartItem)
        .post(cartController.addCartItem);

    app.route('/cart/:cartId')
        .delete(cartController.deleteCartItem);

    app.route('/cart/:userId')
        .get(cartController.getIndividualCart);
}

module.exports = {routeCart};