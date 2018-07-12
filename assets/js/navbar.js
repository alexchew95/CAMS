$(document).ready(function () {

	//load the navbar
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
})
