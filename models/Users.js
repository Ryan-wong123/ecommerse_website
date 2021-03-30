"use strict";

class Users {
    constructor(userId, username, userEmail, userPassword, userAddress, userPostal, userPasswordHash) {
        this.userId = userId;
        this.username = username;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userAddress = userAddress;
        this.userPostal = userPostal;
        this.userPasswordHash = userPasswordHash;
    }

    //add get methods here
    getuserId() {
        return this.userId;
    }

    getusername() {
        return this.username;
    }

    getuserEmail() {
        return this.userEmail;
    }

    getuserPassword() {
        return this.userPassword;
    }

    getuserAddress() {
        return this.userAddress;
    }

    getuserPostal() {
        return this.userPostal;
    }

    getuserPasswordHash() {
        return this.userPasswordHash;
    }

    //set method
    setusername(username) {
        this.username = username;
    }

    setuserEmail(userEmail) {
        this.userEmail = userEmail;
    }

    setuserPassword(userPassword) {
        this.userPassword = userPassword;
    }

    setuserAddress(userAddress) {
        this.userAddress = userAddress;
    }

    setuserPostal(userPostal) {
        this.userPostal = userPostal;
    }

    setuserPasswordHash(userPasswordHash) {
        this.userPasswordHash = userPasswordHash;
    }
}

module.exports = Users;
