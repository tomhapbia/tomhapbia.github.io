$(document).ready(function() {
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

});