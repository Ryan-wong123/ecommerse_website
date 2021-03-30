"use strict"

const usersController = require('../controllers/usersController');

function routeUsers(app) {

    //get all accounts and also add accounts
    app.route('/users')
        .get(usersController.getAllusers)
        .post(usersController.addusers);

    //update password
    app.route('/users/:userId')
        .put(usersController.updateUsers);

    //login
    app.route('/login')
        .post(usersController.authenticateByDB);

}

module.exports = {routeUsers};