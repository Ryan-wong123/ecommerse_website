function shirtIndividual() {
    //get data from url
    var urlParams = new URLSearchParams(window.location.search);

    //get data from key of the query string and set it to variables
    id = urlParams.getAll('id');

    getshirtIndividualData();
}

//shirt data for individual shirt
function getshirtIndividualData(){

    var individualProduct_url = product_url + "/" + id;
    var individualProduct = new XMLHttpRequest();
    individualProduct.open("GET", individualProduct_url, true);
    individualProduct.setRequestHeader("Content-Type", "application/json");
    individualProduct.onload = function () {
        var individualProduct_array = JSON.parse(individualProduct.responseText);

        //display the individual data
        document.getElementById("individualShirtName").innerHTML= individualProduct_array[0].productName;
        document.getElementById("individualShirtPrice").innerHTML= individualProduct_array[0].productPrice;
        document.getElementById("individualShirtPic1").src = individualProduct_array[0].productModelF;
        document.getElementById("individualShirtPicslide1").src = individualProduct_array[0].productModelF;
    };  

    individualProduct.send(JSON.stringify(individualProduct));

}

//add to cart
function addToCart(){
    var login = sessionStorage.getItem("loginSuccess");
    var username = sessionStorage.getItem("username");
    var userId = sessionStorage.getItem("userid");
    if(login == "true"){

        var cart = { usernameId : userId, productId: id };
        sessionStorage.setItem("addToCart", JSON.stringify(cart));

        console.log("Successfully added to cart for: " + username + ", id: " + userId);

    }
    else{
        window.location.href = "login.html";
    }

}