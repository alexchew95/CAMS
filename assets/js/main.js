/////* Common Variable List */////

//var APIUrl = 'http://localhost/lpts-ci/api/';
var APIUrl = 'https://lpts-ci.herokuapp.com/api/';

/* Common function call for most html page */

$(document).ready(function () {
	// Load Session data
	token = sessionStorage.getItem("token");
	role = sessionStorage.getItem("role");
	name = sessionStorage.getItem("name");
	userId = sessionStorage.getItem("userId");
	email = sessionStorage.getItem("email");
	if (role == 'AGENT' || role == 'SAGENT') {
		$('input[type="text"],input[type="number"],input[type="checkbox"], select').prop("disabled", true);
	}


	// Check Admin Login

	function checkLogin() {
		if (!token) {
			window.location = "index.html";
		}

	}
	window.onload = checkLogin;
	// Load TopBar and NavBar
	$('#topbar').load('topbar.html', function () {
		console.log("Topbar loaded");

	});
	$('#navbar').load('navbar.html', function () {
		//Add Underline to active html page. This will only work on LIVE SERVER
		var url = document.location.href;
		//this removes the anchor at the end, if there is one
		url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
		//this removes the query after the file name, if there is one
		url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
		//this removes everything before the last slash in the path
		url = url.substring(url.lastIndexOf("/") + 1, url.length);
		$('.nav > li > a[href="' + url + '"]').addClass('active');
		console.log(url);
	});

});



/////* Common Function List */////

/* 
Function: To get the value in URL 
Usage:	var customerId = $_GET('customerId'); 
*/
function $_GET(q, s) {
	s = (s) ? s : window.location.search;
	var re = new RegExp('&amp;' + q + '=([^&amp;]*)', 'i');
	return (s = s.replace(/^\?/, '&amp;').match(re)) ? s = s[1] : s = '';
}

function calcInstallment() {
	var loanApplied =parseInt($("#LoanApplied").val());
	var tenure =parseInt($("#Tenure").val());
	if (tenure==null || tenure=="",loanApplied==null || loanApplied==""){
		$("#Installment").val("-");
	}
	$("#Installment").val(loanApplied/tenure);

}

function roleControl() {
	if (role == 'AGENT' || role == 'SAGENT') {
		$('input[type="text"],input[type="number"],input[type="checkbox"], select').prop("disabled", true);
	}

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
	$('input[type="text"]').val('');
	$('input[type="number"]').val('');
	$('.custom-select').val('');
}

/* Button Action */
$("#btnLogout").click(function () {
	sessionStorage.clear();
	window.location = "index.html";
});

$("#btnCloseModal").click(function (event) {
	event.preventDefault();
	closeModal();
});
