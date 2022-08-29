var url_string = window.location.href;
var url = new URL(url_string);
var nip = url.searchParams.get("nip");
var telegram_id = url.searchParams.get("telegram_id");
document.getElementById("nip").innerHTML = nip;
document.getElementById("telegram_id");