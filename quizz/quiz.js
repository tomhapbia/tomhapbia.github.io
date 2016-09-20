var question1 = {
	question: "Paris la thu do nuoc nao?",
	ans1: "Norway",
	ans2: "France",
	ans3: "England",
	ans: "France",

};

var question2 = {
	question: "Hà Nội thuộc miền nào?",
	ans1: "Miền Bắc",
	ans2: "Miền Trung",
	ans3: "Miền Nam",
	ans: "Miền Bắc"
};

var question3 = {
	question: "Sơn Tùng MTP là ai?",
	ans1: "Đạo sĩ",
	ans2: "Bác sĩ",
	ans3: "Y sĩ",
	ans: "Đạo sĩ"
};

var question4 = {
	question: "Cr7 chơi môn thể thao nào?",
	ans1: "Bóng chuyền",
	ans2: "Bóng rổ",
	ans3: "Bóng đá",
	ans: "Bóng đá"
};

var question5 = {
	question: "Việt Nam có bao nhiêu mùa?",
	ans1: "4",
	ans2: "2",
	ans3: "3",
	ans: "4"
};

var question6 = {
	question: "Năm nhuận có bao nhiêu ngày?",
	ans1: "366",
	ans2: "364",
	ans3: "365",
	ans: "366"
};

var question7 = {
	question: "T2 năm nhuận có bao nhiêu ngày?",
	ans1: "28",
	ans2: "29",
	ans3: "30",
	ans: "29"
};

var question8 = {
	question: "Một ngày có bao nhiêu giờ?",
	ans1: "24",
	ans2: "22",
	ans3: "23",
	ans: "24"
};

var question9 = {
	question: "Một giờ có bao nhiêu phút?",
	ans1: "60",
	ans2: "58",
	ans3: "59",
	ans: "60"
};

var question10 = {
	question: "Một phút có bao nhiêu giây?",
	ans1: "60",
	ans2: "61",
	ans3: "62",
	ans: "60"
};

var arrQuestion = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

for (var i = arrQuestion.length - 1; i > 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	var temp = arrQuestion[i];
	arrQuestion[i] = arrQuestion[j];
	arrQuestion[j] = temp;
}
var socauhoi = 0;
var idques = "cau";
function checknumques() {
	var input = document.getElementById("socauhoi");
	var socauhoi = input.value;
	// alert(isNaN(socauhoi));
	if (isNaN(socauhoi)) {
		alert("Nhap vao \"so\" cau hoi =.=");
		location.href = "index.html";

	} else{
		for (var i = 1; i <= socauhoi; i++) {
			document.getElementById(idques + i).style.display = "block";

		};
		document.getElementById("check").style.display = "block";

		var danhsachdapan = [];

		for (var i = 0; i <= socauhoi; i++) {
			danhsachdapan.push(arrQuestion[i].ans);
		};

		for (var i = 1; i <= socauhoi; i++) {
			var idcauhoi = "#name" + i;
			var cauhoi = document.querySelector(idcauhoi);
			cauhoi.innerHTML = arrQuestion[i-1].question;
			for (var j = 1; j <= 3; j++) {
				var iddapan = "#dapan" + i + j;
				var ans = document.querySelector(iddapan);
				var chiso = "ans";
				chiso += j;
				ans.innerHTML = arrQuestion[i-1][chiso];
			}
		}
	};
}

function changeColor(dau) {
	id = dau.id;
	id = id.slice(0, (id.length-1));
	for (var i = 1; i <= 3; i++) {
		if (dau.id.slice(-1) != i) {
			if (document.getElementById(id+i).getAttribute("class") == "abc") {
				document.getElementById(id+i).setAttribute("class", "dapan");
			}
		} else {
			dau.setAttribute("class", "abc");
		}
	}
}

var traloiall = [];
var ansall = [];
var a = [];
var b = [];
var caudung = 0;
var flag = false;
function check() {
	var input1 = document.getElementById("socauhoi");
	var socauhoi1 = input1.value;
	traloiall = document.querySelectorAll(".abc");
	for (var i = 0; i < traloiall.length; i++) {
		if (traloiall[i].innerHTML == arrQuestion[i].ans) {
			caudung++;
		}
	}
	if (caudung == socauhoi1) {
		alert("Chuc mung ban da tra loi dung toan bo cau hoi");
		location.href = "index.html";
	} else{
		alert("Chia buon voi ban :'(. Ban da tra loi dung " + caudung + " cau!");
			location.href = "index.html";
		}
	}
