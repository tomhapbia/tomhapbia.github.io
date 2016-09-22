var p1 = {
	name: "Phạm Nhật Vượng",
	age: 48,
	avatar: "1.jpg",
	rich: 28.502,
	mail: "vuon@techmaster.vn",
	phone: "0187987987",
	address: "Hà Tĩnh"
}

var p2 = {
	name: "Trần Đình Long",
	age: 55,
	avatar: "2.jpg",
	rich: 8.405,
	mail: "long@techmaster.vn",
	phone: "0287987987",
	address: "Hải Dương"
}

var p3 = {
	name: "Trịnh Văn Quyết",
	age: 41,
	avatar: "3.jpg",
	rich: 5.130,
	mail: "quyet@techmaster.vn",
	phone: "0387987987",
	address: "Hà Nội"
}

var p4 = {
	name: "Phạm Thu Hương",
	age: 47,
	avatar: "4.jpg",
	rich: 4.915,
	mail: "huong@techmaster.vn",
	phone: "0487987987",
	address: "Hà Nội"
}

var p5 = {
	name: "Phạm Thúy Hằng",
	age: 42,
	avatar: "5.jpg",
	rich: 3.282,
	mail: "huong@techmaster.vn",
	phone: "0587987987",
	address: "Hà Nội"
}

var p6 = {
	name: "Nguyễn Đức Tài",
	age: 47,
	avatar: "6.jpg",
	rich: 3.105,
	mail: "tai@techmaster.vn",
	phone: "0687987987",
	address: "Nam Định"
}

var p7 = {
	name: "Trương Thị Lệ Khanh",
	age: 55,
	avatar: "7.jpg",
	rich: 2.616,
	mail: "khanh@techmaster.vn",
	phone: "0787987987",
	address: "An Giang"
}

var p8 = {
	name: "Nguyễn Hoàng Yến",
	age: 53,
	avatar: "8.jpg",
	rich: 1.994,
	mail: "yen@techmaster.vn",
	phone: "0887987987",
	address: "Hà Nam Ninh"
}

var p9 = {
	name: "Lê Phước Vũ",
	age: 53,
	avatar: "9.jpg",
	rich: 1.798	,
	mail: "vu@techmaster.vn",
	phone: "0987987987",
	address: "Quảng Nam"
}
var p10 = {
	name: "Đoàn Nguyên Đức",
	age: 53,
	avatar: "10.jpg",
	rich: 1.784	,
	mail: "duc@techmaster.vn",
	phone: "0187987987",
	address: "Bình Định"
}


var arrP = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];
var temp = '';
var id = "#";

function dynamicSorta(property) {
	var sortOrder = 1;
	if(property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a,b) {
		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
		return result * sortOrder;
	}
}

function dynamicSortb(property) {
	var sortOrder = 1;
	if(property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a,b) {
		var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
		return result * sortOrder;
	}
} 

var dem = 0;
function creatTable(){
	for (var i = 0; i < arrP.length; i++) {
		temp = '<tr id="' + (i+1) + '"><td class="stt">' + (i+1) + '</td><td class="name">' + arrP[i].name + '</td><td class="age">' + arrP[i].age + '</td><td class="avatar"><img src="img/'+ arrP[i].avatar +'"></td><td class="rich">' + arrP[i].rich + '</td><td class="mail">'+ arrP[i].mail +'</td><td class="phone">' + arrP[i].phone + '</td><td class="address">' + arrP[i].address + '</td></tr>'
		$("tbody").append(temp);
		temp = '';
		if (i%2 != 0) {
			$(id+i).css('background', '#ADD5AF');
		}
	}
}
creatTable();

function sort(para){
	dem++;
	if (dem%2 == 0) {
		var className = $(para).attr("class");
		arrP.sort(dynamicSorta(className));
		$("tbody").html('');
		creatTable();
		$("i").attr('class', 'fa fa-sort');
		$(para).children('i').attr('class', 'fa fa-sort-desc');
	}
	if (dem%2 == 1) {
		var className = $(para).attr("class");
		arrP.sort(dynamicSortb(className));
		$("tbody").html('');
		creatTable();
		$("i").attr('class', 'fa fa-sort');
		$(para).children('i').attr('class', 'fa fa-sort-asc');
	}
}




































