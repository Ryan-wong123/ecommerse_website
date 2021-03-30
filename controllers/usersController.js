"use strict"

//import file
const UsersDB = require('../models/UsersDB');
const Users = require('../models/Users');

var usersDB = new UsersDB();

//retrieve all users
function getAllusers(request, respond){
    usersDB.getAllusers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//update comment
function updateUsers(request, respond)
{
    var userId = new Users(request.params.userId, request.body.username, request.body.userEmail, request.body.userPassword, request.body.userAddress, request.body.userPostal, request.body.userPasswordHash);

    usersDB.updateusers(userId, function(error, result)
    {
        if (error) {
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}

//add account
function addusers(request, respond)
{

    var account = new Users(null, request.body.username, request.body.userEmail, request.body.userPassword, request.body.userAddress, request.body.userPostal, request.body.userPasswordHash);

    usersDB.addusers(account, function(error, result) {
        if (error) {
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}

// This function authenticates by using the database to look for the requested username and password.
function authenticateByDB(request, respond) {
    var input_username = request.body.username;
    var input_password = request.body.userPassword;
    var msg = "";

    usersDB.authenticateByDB(request.body.username, request.body.userPassword, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If the record can be found, the result will have one item else it will have no item.
            if (result.length > 0) {
                msg = "1";
            } else {
                msg = "Login Fail!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

// This function creates a custom message to be sent back to the client. 
function prepareMessage(msg) {
    var obj = { "message": msg };

    return obj;
}


module.exports = {getAllusers, updateUsers, addusers, authenticateByDB};