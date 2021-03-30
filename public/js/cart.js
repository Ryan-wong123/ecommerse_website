function cartValue(){
    if (sessionStorage.length > 0) {

        var cartItems = sessionStorage.getItem("addToCart");

        
    } else {
        console.log("no items");
    }
}