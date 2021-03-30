"use strict"

var db = require('../db-connection');

class UsersDB{
    
    //get all users
    getAllusers(callback){
        var sql = "SELECT * FROM tpawaw.users";

        db.query(sql, callback);
    }

    //update password
    updateusers(users,callback) {
        var sql = "UPDATE tpawaw.users SET userPassword = ? WHERE userId = ?";
        
        return db.query(sql, [users.getuserPassword(), users.getuserId()], callback);
    }

    //create new users
    addusers(users,callback) {
        var sql = "INSERT INTO tpawaw.users (username, userEmail, userPassword, userAddress, userPostal, userPasswordHash) VALUES (?,?,?,?,?,?)";
        
        db.query(sql, [users.getusername(), users.getuserEmail(), users.getuserPassword(), users.getuserAddress(), users.getuserPostal(), users.getuserPasswordHash()], callback) ;
    }

    //login credential
    authenticateByDB(id, password, callback) {
        var sql = "SELECT * FROM tpawaw.users WHERE username = ? AND userPassword = ?";

        db.query(sql, [id, password], callback);
    }
    
    
}

module.exports = UsersDB;
