function showTabList(a){
	if ($('#expandMobile').css('display') == 'none') {
		$('.right-content').toggleClass('right-full');
		if ($(a).children().attr('class') == 'fa fa-chevron-left') {
			$(a).children().attr('class', 'fa fa-chevron-right');
		} else{
			$(a).children().attr('class', 'fa fa-chevron-left');
		};
	} else{
		$('#expandMobile').children('i').attr('clas','fa fa-chevron-left');
		$('.right-content').css('margin-left','100%');
	};
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
	$('[data-toggle="tooltip"]').tooltip({
		trigger: 'hover'
	})

	var width = $('.left-content').width();
	var height = $('.left-content').height();
	$('#myVideo').attr('width', width);
	$('#myVideo').attr('height', height);
	$(window).resize(function(){
		var width = $('.left-content').width();
		var height = $('.left-content').height();
		$('#myVideo').attr('width', width);
		$('#myVideo').attr('height', height);

		var heightRightContent = height - $('.nav-tabs').height();
		$('.right-content .tab-content').css('height', heightRightContent);
	});



	var heightCodeNow = $('.code-terminal').height();
	$(window).resize(function(){
		var heightCodeNow = $('.code-terminal').height();
		$('.folder').css('height', heightCodeNow);
	});
	$('.folder').css('height', heightCodeNow);


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




