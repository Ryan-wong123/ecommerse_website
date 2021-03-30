"use strict"

//import file
const ProductDB = require('../models/ProductDB');

var productDB = new ProductDB();

//retrieve all products
function getAllProducts(request, respond){
    productDB.getAllProducts(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//search for single product
function getSingleProduct(request, respond){
    
    productDB.getSingleProduct(request.params.productId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllProducts, getSingleProduct};