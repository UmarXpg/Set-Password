var header = new Headers();
header.append("Content-Type", "application/json");
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	const formData = new FormData(this);
	const searchParams = new URLSearchParams();
	for (const pair of formData) {
		searchParams.append(pair[0], pair[1]);
	}
	let submit = document.getElementById("password").value;

	var raw = JSON.stringify({
		"nip": url.searchParams.get("nip"),
		"telegram_id": Number(url.searchParams.get("telegram_id")),
		"password": submit
	})
	var requestOptions = {
		method: 'POST',
		headers: header,
		body: raw,
		redirect: 'follow'
	};
	fetch('https://apiauth.mis-plus.com/users/telegram', requestOptions).then(function (response) {
		alert
		if (response.status == 200) {
			window.location.href = "success.html";
		} else if (response.status == 401) {
			alert("Password Your Entered Is Wrong");
		} else {
			alert("Internal Server Error");
		}
		return response.text();
	})
});