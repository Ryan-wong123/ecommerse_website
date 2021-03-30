"use strict"

//import file
const CartDB = require('../models/CartDB');
const Cart = require('../models/Cart');

var cartDB = new CartDB();

//retrieve cart items
function getAllCartItem(request, respond) {
    cartDB.getAllCartItem(function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//add cart item
function addCartItem(request, respond) {
    var cart = new Cart(null, request.body.userId, request.body.productId, request.body.cartUsername, request.body.cartProductName, request.body.cartProductCategory, request.body.cartProductPrice, request.body.cartProductSize, request.body.cartProductQuantity, request.body.cartProductModelF);

    cartDB.addCartItem(cart, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//delete cart item
function deleteCartItem(request, respond) {

    var cartId = request.params.cartId;

    cartDB.deleteCartItem(cartId, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

function getIndividualCart(request, respond) {
    cartDB.getIndividualCart(request.params.userId, function (error,result){
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}
module.exports = {getAllCartItem,addCartItem,deleteCartItem,getIndividualCart};