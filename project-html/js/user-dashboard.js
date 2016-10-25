/**
 * Created by Tom on 10/20/16.
 */


$(document).ready(function() {
    $(".navbar-default .navbar-nav>li").hover(function(){
        $(".bottom-line").css("border", "none");
        $(".navbar-brand").css("border-top", "1px solid #33485F");
        $(this).css("border-top","1px solid #ccc");
    }, function(){
        $(".bottom-line").css("border-top", "1px solid #ccc");
        $(this).css("border-top","none");
        $(".navbar-brand").css("border-top", "none");
    });




    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
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

    $(".rating-user-course").starRating({
        initialRating: 4,
        strokeColor: '#ff8e77',
        activeColor: '#ff8e77',
        hoverColor: '#ff8e77',
        strokeWidth: 10,
        useGradient: false,
        starSize: 18
    });

});