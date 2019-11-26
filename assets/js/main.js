
// Check Admin Login

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


function checkLogin() {
	console.log("Checking Login")
	firebase.auth().onAuthStateChanged(function (user) {
		if (user == null) {
			window.location.href = "index.html";
			// } else if (user.displayName == null || user.photoURL == null) {
			// 	window.location.href = "UserProfile.html";
		}
		else if (sessionStorage.length == 0 && user) {
			var db = firebase.firestore();//API firestore database
			//get data from Users table where created by current login user
			db.collection("Users").where("Uid", "==", user.uid).onSnapshot(function (snapshot) {
				snapshot.docChanges().forEach(function (change) {
					if (change.type === "added") {//Get realtime new added data  with Cloud Firestore
						sessionStorage.setItem("name", change.doc.data().DisplayName)
						sessionStorage.setItem("role", change.doc.data().Role)
						sessionStorage.setItem("email", change.doc.data().Email)
						sessionStorage.setItem("uid", change.doc.data().Uid)
						sessionStorage.setItem("profilePicUrl", change.doc.data().Photo)
						document.location.reload()
					}

				});
			});
		}
		else if (user && sessionStorage.length > 0) {
			$(".custom-loader").hide(500)
		}
	});

}


$(document).ready(function () {
	checkLogin()
	console.log(sessionStorage)
	// Load Session data

	uid = sessionStorage.getItem("uid");
	role = sessionStorage.getItem("role");
	name = sessionStorage.getItem("name");
	email = sessionStorage.getItem("email");
	profilePicUrl = sessionStorage.getItem("profilePicUrl");







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
		console.log(url);
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

function sendEmail(receiverEmail,subject,message) {
	APIUrl = "http://cincai-ams-ci.herokuapp.com/api/"
	console.log(message)
	$.ajax({
		url: APIUrl + 'sendE',
		type: 'POST',

		data: {
			"receiverEmail": receiverEmail,//receiver
			"currentuser": "CAMS",//receiver
			"subject": subject,
			"message":message,//receiver


			//subject-
			//message
		},

		dataType: 'JSON',
		success: function (data) {

		},
		error: function (xhr, ajaxOptions, thrownError) {
			var errorMsg = 'Ajax request failed: ' + xhr.responseText;
			//console.log(errorMsg);
		}
	});

}