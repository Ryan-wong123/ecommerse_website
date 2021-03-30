"use strict";

const express = require("express");

//import and route url path
const routeCart = require('./routes/routeCart');
const routeProduct = require('./routes/routeProduct');
const routeUsers = require('./routes/routeUsers');

const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call out route files
routeCart.routeCart(app);
routeProduct.routeProduct(app);
routeUsers.routeUsers(app);

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});