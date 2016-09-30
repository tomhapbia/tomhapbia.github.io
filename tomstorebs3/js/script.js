$(document).ready(function() {
	// wow js 

	new WOW().init();


	// show/hide mobile navbar

	$('.navbar-toggle').on('click', function(){
		$('li.dropdown').children('ul').removeClass('dropdown-show');
	})


	$('li.dropdown').on('click', function() {
		if ($(this).children('ul').hasClass('dropdown-show')) {
			$(this).children('ul').removeClass("dropdown-show");
		} else{
			$('li.dropdown').children('ul').removeClass('dropdown-show');
			$(this).children('ul').addClass('dropdown-show');
		};
	});

	//control carousel
	
	$("#myBtn").click(function(){
		$("#bs-carousel").carousel("prev");
	});
	$("#myBtn2").click(function(){
		$("#bs-carousel").carousel("next");
	});


	// config datepicker

	$( function() {
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			showAnim: "fold",
			dateFormat: "dd-mm-yy"
		});
	} );

	// config back to top

	var offset = 300;

	//hide or show the "back to top" link
	$(window).scroll(function(){
		if ($(this).scrollTop() > offset) {
			$('#btn-to-top').css('display', 'block');
		} else{
			$('#btn-to-top').css('display', 'none');
		};
	});

	$('#btn-to-top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});


});








