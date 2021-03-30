"use strict"

var db = require('../db-connection');

class ProductDB{
    //retrieve products
    getAllProducts(callback){
        var sql = "select * from tpawaw.product";
        db.query(sql, callback);
    }

    //get single product with product id
    getSingleProduct(getproductId, callback){
        var sql = "SELECT * FROM tpawaw.product WHERE productId = ? ";
        db.query(sql,[getproductId], callback);
    }

}

module.exports = ProductDB;