$(document).ready(function() {

	$(".my-rating-tom").starRating({
		initialRating: 4,
		strokeColor: '#ff8e77',
		activeColor: '#ff8e77',
		hoverColor: '#ff8e77',
		strokeWidth: 10,
		useGradient: false,
		starSize: 18
	});

	$(".review-stars").starRating({
		initialRating: 4.5,
		strokeColor: '#ff8e77',
		activeColor: '#ff8e77',
		hoverColor: '#ff8e77',
		strokeWidth: 10,
		useGradient: false,
		starSize: 50
	});

	$("#user-comment-star").starRating({
		initialRating: 4.5,
		strokeColor: '#ff8e77',
		activeColor: '#ff8e77',
		hoverColor: '#ff8e77',
		strokeWidth: 10,
		useGradient: false,
		starSize: 30
	})
});