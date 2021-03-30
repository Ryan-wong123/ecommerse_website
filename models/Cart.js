"use strict";

class Cart {
    constructor(cartId, userId, productId, cartUsername, cartProductName, cartProductCategory, cartProductPrice, cartProductSize, cartProductQuantity, cartProductModelF) {
        this.cartId = cartId;
        this.userId = userId;
        this.productId = productId;
        this.cartUsername = cartUsername;
        this.cartProductName = cartProductName;
        this.cartProductCategory = cartProductCategory;
        this.cartProductPrice = cartProductPrice;
        this.cartProductSize = cartProductSize;
        this.cartProductQuantity = cartProductQuantity;
        this.cartProductModelF = cartProductModelF;
    }

    //add get methods here
    getcartId() {
        return this.cartId;
    }

    getuserId() {
        return this.userId;
    }

    getproductId() {
        return this.productId;
    }

    getcartUsername() {
        return this.cartUsername;
    }

    getcartProductName() {
        return this.cartProductName;
    }

    getcartProductCategory() {
        return this.cartProductCategory;
    }

    getcartProductPrice() {
        return this.cartProductPrice;
    }

    getcartProductSize() {
        return this.cartProductSize;
    }

    getcartProductQuantity() {
        return this.cartProductQuantity;
    }

    getcartProductModelF() {
        return this.cartProductModelF;
    }

    // add set methods
    setuserId(userId) {
        this.userId = userId;
    }

    setproductId(productId) {
        this.productId = productId;
    }

    setcartUsername(cartUsername) {
        this.cartUsername = cartUsername;
    }

    setcartProductName(cartProductName) {
        this.cartProductName = cartProductName;
    }

    setcartProductCategory(cartProductCategory) {
        this.cartProductCategory = cartProductCategory;
    }

    setcartProductPrice(cartProductPrice) {
        this.cartProductPrice = cartProductPrice;
    }

    setcartProductSize(cartProductSize) {
        this.cartProductSize = cartProductSize;
    }

    setcartProductQuantity(cartProductQuantity) {
        this.cartProductQuantity = cartProductQuantity;
    }

    setcartProductModelF(cartProductModelF) {
        this.cartProductModelF = cartProductModelF;
    }

}
module.exports = Cart;