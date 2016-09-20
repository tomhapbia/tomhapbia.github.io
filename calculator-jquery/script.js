var number = "";
var pheptinh = "";

function getValue(val) {
	num = $("#number").val();
	$("#number").val(num + "" + val);
}

function pheptoan(val) {
	if (val == "bp") {
		number = $("#number").val();
		$("#number").val((Number(number) * Number(number)).toFixed(5));
	} else if (val == "gt"){
		number = $("#number").val();
		if (number == 0) {
			$("#number").val(1);
		} else{
			a = 1;
			for (var i = 1; i <= number; i++) {
				a *= i;
				$("#number").val(a);
			};
		};
	} else if (val == "can") {
		number = $("#number").val();
		$("#number").val((Math.sqrt(Number(number))).toFixed(5));
	}else {
		number = $("#number").val();
		$("#number").val("");
		pheptinh = val;
	};
}

function ketqua() {
	ketQuaTinh = 0;

	switch(pheptinh){
		case "+":
		ketQuaTinh = (Number(number)*10 + Number($("#number").val())*10)/10;
		break;
		case "-":
		ketQuaTinh = (Number(number)*10 - Number($("#number").val())*10)/10;
		break;
		case "*":
		ketQuaTinh = (Number(number)*10 * Number($("#number").val())*10)/10;
		break;
		case "/":
		ketQuaTinh = (Number(number)*10 / Number($("#number").val())*10)/10;
		break;
		case "%":
		ketQuaTinh = Number(number) % Number($("#number").val());
		break;
	}
	$("#number").val(ketQuaTinh);
}

function reset() {
	number = "";
	pheptinh = "";
	$("#number").val("");
}
function backspace() {
	number = $("#number").val();
	$("#number").val(number.substring(0, number.length - 1	));
}

function changebody() {
	var bodybackgroud = $("#backgroundcal").val();
	$(".wrap").css('background-color', bodybackgroud);
}

function changebackgroundbtn() {
	var btnbackgroud = $("#backgroundbutton").val();
	$(".btn-btn").css('background-color', btnbackgroud);
}

function changecolorbtn() {
	var btncolor = $("#colorbtn").val();
	$(".btn-btn").css('color', btncolor);
}

























