/////////////////////////////////////////////////////////////////////get profile details///////////////////////////////////////////////////////////////////

//This function is to call the profile api and get all the profiles
function getProfileData() {

	var request = new XMLHttpRequest();
	request.open('GET', profile_url, true);

	//This function will be called when data returns from the web api
	request.onload = function () {

		//get all the profile records into our profile array
		profile_array = JSON.parse(request.responseText);

		//call the function so as to display all profile
		login();
	};

	//This command starts the calling of the profile web api
	request.send();
}

//////////////////////////////////////////////////////////////////login page///////////////////////////////////////////////////////////////
var response = "";

function login() {
	// Create a new object to contain the data in the loginForm.
	// We assign the new object to a variable called "credentials".
	var credentials = new Object();

	credentials.username = document.getElementById("loginUsername").value;

	credentials.userPassword = document.getElementById("loginPassword").value;

	var request = new XMLHttpRequest();

	request.open("POST", "/login", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.onload = function () {
		response = JSON.parse(request.responseText);

		totalProfiles = profile_array.length
			for (var count = 0; count < totalProfiles; count++) {
		
			//make variables global so that i can be called out in other functions
			profile_id = profile_array[count].userId;
			username = profile_array[count].username;
			email = profile_array[count].userEmail;
			password = profile_array[count].userPassword;
			
			//check username valid
			if (response.message == "1") {

				if(credentials.username == username){

					credentials.id = profile_id;

					credentials.email = email;

					document.getElementById("loginForm").style.display = "none";

					//session storage

					//set boolean login to true
					sessionStorage.setItem("loginSuccess", "true");

					//set username
					sessionStorage.setItem("username", credentials.username );

					//set user id
					sessionStorage.setItem("userid", credentials.id);

					//set user email
					sessionStorage.setItem("useremail", credentials.email);

					//set user pass
					sessionStorage.setItem("userpass", credentials.userPassword);

					//parse data from login to profile page 
					window.location = "profileorder.html";
				} 
			}

		}

	};

	request.send(JSON.stringify(credentials));

}
