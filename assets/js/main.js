
var firebaseConfig = {
	apiKey: "AIzaSyCHXvC3POJL7AACs6IsCbzm715PozUbaRc",
	authDomain: "miniprojectarticlemanagement.firebaseapp.com",
	databaseURL: "https://miniprojectarticlemanagement.firebaseio.com",
	projectId: "miniprojectarticlemanagement",
	storageBucket: "miniprojectarticlemanagement.appspot.com",
	messagingSenderId: "543563658048",
	appId: "1:543563658048:web:81eaa06410120eab6080a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
	// Load Session data
	uid = sessionStorage.getItem("uid");
	role = sessionStorage.getItem("role");
	name = sessionStorage.getItem("name");
	email = sessionStorage.getItem("email");
	profilePicUrl = sessionStorage.getItem("profilePicUrl");



	// Check Admin Login

	function checkLogin() {
		firebase.auth().onAuthStateChanged(function (user) {

			if (user == null)
				window.location.href = "Login.html";
			else if (user.displayName == null || user.photoURL == null)
				window.location.href = "UserProfile.html";

		});

	}
	window.onload = checkLogin;
	$("#navbar").load("navbar.html", function () {
		//Add Underline to active html page. This will only work on LIVE SERVER
		var url = document.location.href;
		//this removes the anchor at the end, if there is one
		url = url.substring(
			0,
			url.indexOf("#") == -1 ? url.length : url.indexOf("#")
		);
		//this removes the query after the file name, if there is one
		url = url.substring(
			0,
			url.indexOf("?") == -1 ? url.length : url.indexOf("?")
		);
		//this removes everything before the last slash in the path
		url = url.substring(url.lastIndexOf("/") + 1, url.length);
		$('.nav > li > a[href="' + url + '"]').addClass("active");
		//console.log(url);
	});
	// Load TopBar and NavBar
	$("#topbar").load("topbar.html", function () {

	});

});

/////* Common Function List */////

/* 
Function: To get the value in URL 
Usage:	var customerId = $_GET('customerId'); 
*/
function $_GET(q, s) {
	s = s ? s : window.location.search;
	var re = new RegExp("&amp;" + q + "=([^&amp;]*)", "i");
	return (s = s.replace(/^\?/, "&amp;").match(re)) ? (s = s[1]) : (s = "");
}




function closeModal() {
	$.modal.close();
}

function closeAndReload() {
	$.modal.close();
	window.location.reload();
}

/* Reset Modal textboxs value to null */
function resetModalTextbox() {
	$('input[type="text"]').val("");
	$('input[type="number"]').val("");
	$(".custom-select").val("");
}



$("#btnCloseModal").click(function (event) {
	event.preventDefault();
	closeModal();
});
