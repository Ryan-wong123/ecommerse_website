//////////////////////////////////////////////////////////////////////////////signup page///////////////////////////////////////////////////////////////////////////////

var response = "";

function signUp() {
    // Create a new object to contain the data in the loginForm and assign the new object to a variable called "credentials".
    var credentials = new Object();

    credentials.username = document.getElementById("SUser").value;
    credentials.userEmail = document.getElementById("SEmail").value;
    credentials.userPassword = document.getElementById("SPass").value;
    credentials.userAddress = "";
    credentials.userPostal = "";
    credentials.userPasswordHash = "";

    var request = new XMLHttpRequest();

    request.open("POST", "/users", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        response = JSON.parse(request.responseText);
    };

    request.send(JSON.stringify(credentials));

}
