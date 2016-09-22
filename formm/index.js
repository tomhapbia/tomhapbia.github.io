var regUsername = /^[a-z0-9_-]{3,16}$/;
var regMail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
var regPhone = /^(0\d{9,10})$/;
var regPassword = /^[A-Z]{1}[a-zA-Z0-9]{6,20}$/;
var regFb = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;

function checkReg (str, reg){
	return (reg.test(str));
}

$("#username").on('change', function(){
	var username = $("#username").val();
	if (!checkReg(username, regUsername)) {
		$("#username").next('span').text('Username chi tu 3-16 ki tu!');
	} else {
		$("#username").next('span').text('');
	}
})

$("#email").on('change', function(){
	var email = $("#email").val();
	if (!checkReg(email, regMail)) {
		$("#email").next('span').text('Sai Email!');
	} else {
		$("#email").next('span').text('');
	}
})
$("#facebook").on('change', function(){
	var facebook = $("#facebook").val();
	if (!checkReg(facebook, regFb)) {
		$("#facebook").next('span').text('Sai địa chỉ FB!');
	} else {
		$("#facebook").next('span').text('');
	}
})
$("#phone").on('change', function(){
	var phone = $("#phone").val();
	if (!checkReg(phone, regPhone)) {
		$("#phone").next('span').text('Sai SDT!');
	} else {
		$("#phone").next('span').text('');
	}
})
$("#password").on('change', function(){
	var password = $("#password").val();
	if (!checkReg(password, regPassword)) {
		$("#password").next('span').text('Toi thieu 6-20 ki tu. Ki tu dau tien la chu hoa! ');
	} else {
		$("#password").next('span').text('');
	}
})


$("#register").on('submit', function(){
	if ($("span").text() == '' && $('input').val() != '') {
		return true;
	} else{
		return false;
	};
})















