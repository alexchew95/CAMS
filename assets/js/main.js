/////* Common Function List */////

function checkAdminLogin() {
	if (!token) {
		window.location = "index.html";
    }
    alert(sessionStorage.getItem("name"));
	document.querySelector('#txt_username').innerHTML = sessionStorage.getItem("name");
	document.querySelector('#txt_role').innerHTML = sessionStorage.getItem("role");
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


