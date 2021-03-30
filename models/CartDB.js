"use strict"

var db = require('../db-connection');

class CartDB {
    //retrieve all cart item
    getAllCartItem(callback) {
        var sql = "select * from tpawaw.cart";

        db.query(sql, callback);
    }

    //add cart item
    addCartItem(cart, callback) {
        var sql = "INSERT INTO tpawaw.cart (userId, productId, cartUsername, cartProductName, cartProductCategory, cartProductPrice, cartProductSize, cartProductQuantity, cartProductModelF) VALUES (?,?,?,?,?,?,?,?,?)";

        db.query(sql, [cart.getuserId(), cart.getproductId(), cart.getcartUsername(), cart.getcartProductName(), cart.getcartProductCategory(), cart.getcartProductPrice(), cart.getcartProductSize(), cart.getcartProductQuantity(), cart.getcartProductModelF()], callback);
    }

    //delete cart item
    deleteCartItem(cartid, callback) {
        var sql = "DELETE from tpawaw.cart WHERE cartId = ?";

        return db.query(sql, cartid, callback);
    }
    
    getIndividualCart(userId, callback){
        var sql = "SELECT c.cartProductName, c.cartProductCategory, c.cartProductPrice, c.cartProductSize, c.cartProductQuantity, c.cartUsername FROM cart c, users u WHERE c.userId = u.userId AND u.userId = ?";
        
        db.query(sql, [userId], callback);
    }

}

module.exports = CartDB;
