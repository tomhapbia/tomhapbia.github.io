function showTabList(a){
	if ($('#expandMobile').css('display') == 'none') {
		$('.right-content').toggleClass('right-full');
		if ($(a).children().attr('class') == 'fa fa-chevron-left') {
			$(a).children().attr('class', 'fa fa-chevron-right');
		} else{
			$(a).children().attr('class', 'fa fa-chevron-left');
		}
	} else{
		$('#expandMobile').children('i').attr('class','fa fa-chevron-left');
		$('.right-content').css('margin-left','100%');
	}
}

function showTabListMobile(b){
	$(b).children('i').attr('class','fa fa-chevron-right');
	$('.right-content').css('margin-left','0');
	$('#controls-laptop').attr('class','fa fa-chevron-right');

}
var fixshowTerminalMobile = 1;
function showTerminalMobile(c) {
	if (fixshowTerminalMobile%2 == 1){
		$(c).find('i').attr('class', 'fa fa-chevron-left');
		$('.folder').css('margin-left', '0');
	}else {
		$(c).find('i').attr('class', 'fa fa-chevron-right');
		$('.folder').css('margin-left', '-50%');
	}
	fixshowTerminalMobile++;
}



$(document).ready(function() {
	$(".navbar-default .navbar-nav>li").hover(function () {
		$(".bottom-line").css("border", "none");
		$(".navbar-brand").css("border-top", "1px solid #33485F");
		$(this).css("border-top", "1px solid #ccc");
	}, function () {
		$(".bottom-line").css("border-top", "1px solid #ccc");
		$(this).css("border-top", "none");
		$(".navbar-brand").css("border-top", "none");
	});


// Show modal dang nhap/dangki

	$('#btn-dangki').on('click', function () {
		$('.bs-example-modal-lg').modal('show');
		$('#myTabs a[href="#profile"]').tab('show');
	})

	$('#btn-dangki2').on('click', function () {
		$('.bs-example-modal-lg').modal('show');
		$('#myTabs a[href="#profile"]').tab('show');
	})

	$('#btn-dangnhap').on('click', function () {
		$('.bs-example-modal-lg').modal('show');
		$('#myTabs a[href="#home"]').tab('show');
	})




	$('[data-toggle="tooltip"]').tooltip({
		trigger: 'hover'
	});

	var width = $('.left-content').width();
	var height = $('.left-content').height();
	$('#myVideo').attr('width', width);
	$('#myVideo').attr('height', height);


	// var heightCodeNow = $('.code-terminal').outerHeight();
	// console.log(heightCodeNow);
	// $('.folder').css('height', heightCodeNow);
	// $('.fixHeightFolder').css('height', heightCodeNow);
	// console.log(heightCodeNow);


	$(window).resize(function(){
		var width = $('.left-content').width();
		var height = $('.left-content').height();
		$('#myVideo').attr('width', width);
		$('#myVideo').attr('height', height);

		var heightRightContent = height - $('.nav-tabs').height();
		$('.right-content .tab-content').css('height', heightRightContent);
	});



	var heightCodeNow = $('.code-terminal').height();
	$('.folder').css('height', heightCodeNow);
	$('.fixHeightFolder').css('height', heightCodeNow);
	$(window).resize(function(){
		var heightCodeNow = $('.code-terminal').height();
		$('.folder').css('height', heightCodeNow);
		$('.fixHeightFolder').css('height', heightCodeNow);
	});




	var heightRightContent = height - $('.nav-tabs').height();
	$('.right-content .tab-content').css('height', heightRightContent);

	var tabID = 1;
	$('#btn-add-tab-file').click(function () {
		tabID++;
		$('#tablist').append($('<li role="presentation" ><a href="#tab' + tabID + '" role="tab" data-toggle="tab">Tab ' + tabID + '<button class="close" type="button" title="Remove this page">×</button></a></li>'));
		$('.tab-content.sida').append($('<div role="tabpanel" class="tab-pane fade" id="tab' + tabID + '">Tab '+ tabID +' content</div>'));
	});

	$('#tablist').on('click','.close',function(){
		var tabID = $(this).parents('a').attr('href');
		$(this).parents('li').remove();
		$(tabID).remove();

            //display first tab
            var tabFirst = $('#tablist a:first');
            tabFirst.tab('show');
        });
});




