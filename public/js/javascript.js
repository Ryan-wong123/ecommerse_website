//goto homepage
function goToHomePage(){
  window.location.href="index.html";
}

//goto checkout page
function gotoCheckout(){
  window.location.href="checkout.html";
}

//tshirt image picker
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);

}

function gotoPic(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("picSlides");

  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  x[slideIndex-1].style.display = "block";  

}

//hide the drop down for login and registration
function hideLoginDropdown(){
  var login = sessionStorage.getItem("loginSuccess");
  if (login){
    document.getElementById("loginDropdown").style.display = "none";
    window.location.href = "profilepass.html";
  }
  
}