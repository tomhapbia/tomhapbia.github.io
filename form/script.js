var url = location.search;
var arr = [];
var arrFinal = [];

url = decodeURIComponent(url);
url = url.slice(1, url.length);
arr = url.split("&");


for (var i = 0; i < arr.length; i++) {
	arrFinal.push(arr[i].split("="));
};
for (var i = 0; i < arrFinal.length - 1; i++) {
	$(".info").append('<div class="detail"><p>' + arrFinal[i][0] + ':' + '</p><p>' + arrFinal[i][1] + '</p></div>')
};