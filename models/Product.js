"use strict";

class Product {
constructor(productId, productName, productCategory, productPrice, productSize, productQuantity, productModelF, productModelB, productF, productB) {
    this.productId = productId;
    this.productName = productName;
    this.productCategory = productCategory;
    this.productPrice = productPrice;
    this.productSize = productSize;
    this.productQuantity = productQuantity;
    this.productModelF = productModelF;
    this.productModelB = productModelB;
    this.productF = productF;
    this.productB = productB;
    }   

    //add the get methods here
    getproductId(){
        return this.productId;
    }

    getproductName(){
        return this.productName;
    }

    getproductCategory(){
        return this.productCategory;
    }

    getproductPrice(){
        return this.productPrice;
    }

    getproductSize(){
        return this.productSize;
    }

    getproductQuantity(){
        return this.productQuantity;
    }

    getproductModelF(){
        return this.productModelF;
    }

    getproductModelB(){
        return this.productModelB;
    }

    getproductF(){
        return this.productF;
    }

    getproductB(){
        return this.productB;
    }

}
module.exports = Product;