//This function is to call the game api and get all the games
function getProductData() {

    var request = new XMLHttpRequest();
    request.open('GET', product_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {

        //get all the games records into our games array
        product_array = JSON.parse(request.responseText);
    
        //call the function so as to display all games tiles for "men tshirt"
        displayMen(shopMen);

    };

    //This command starts the calling of the games web api
    request.send();

}

//This function is to display the games tiles 
function displayMen(shopMen) {

    var table = document.getElementById("shirtBody");

    table.innerHTML = "";
    totalMenProducts = product_array.length;
    for (var count = 0; count < totalMenProducts; count++) {
        if (product_array[count].productCategory == shopMen) {
            
            productId = product_array[count].productId;
            var thumbnail = product_array[count].productModelF;
            var title = product_array[count].productName;
            var price = product_array[count].productPrice;
            var cell =

                '<div class="tshirtTile">'+
                    '<img src="' + thumbnail + '" style="width:350px; height:400px;"/>'+
                    '<h1 style="margin-left:108px;" item=' + count + ' onclick="showIndividualShirt(this);" >' + title + '</h1>'+
                    '<h4 style="margin-left:115px;">Price: ' + price + '</h4>'+
                '</div>';

            table.insertAdjacentHTML('beforeend', cell);

        }
    }

}

//function to display individual game
function showIndividualShirt(element) {
    var item = element.getAttribute("item");
    
    var individualProduct_url = product_array[item].productId;

    window.location = "shirtIndividual.html?id=" + individualProduct_url;

}
