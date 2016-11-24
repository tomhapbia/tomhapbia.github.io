/**
 * Created by Tom on 10/27/16.
 */


/**
 * Created by Tom on 10/7/16.
 */

$(document).ready(function(){

    $(".navbar-default .navbar-nav>li").hover(function(){
        $(".bottom-line").css("border", "none");
        $(".navbar-brand").css("border-top", "1px solid #33485F");
        $(this).css("border-top","1px solid #ccc");
    }, function(){
        $(".bottom-line").css("border-top", "1px solid #ccc");
        $(this).css("border-top","none");
        $(".navbar-brand").css("border-top", "none");
    });


// waves

    Waves.attach('.signup-banner');
    Waves.init();

// WOW

    new WOW().init();

// Display KhoaHocTag

    if ($('.tagKhoahoc').css('margin-bottom') == '0px'){
        var positionKhoaHocTag = $('.khoahoctag').offset();
        $(window).scroll(function(){
            if ($(this).scrollTop() >= positionKhoaHocTag.top) {
                $('.khoahoctag').addClass('khoahocPositionFixed');
            }else {
                $('.khoahoctag').removeClass('khoahocPositionFixed');
            }
        });
    }




// Back to top


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

// Show modal dang nhap/dangki

    $('#btn-dangki').on('click', function(){
        $('.bs-example-modal-lg').modal('show');
        $('#myTabs a[href="#profile"]').tab('show');
    })

    $('#btn-dangnhap').on('click', function(){
        $('.bs-example-modal-lg').modal('show');
        $('#myTabs a[href="#home"]').tab('show');
    })

// fix height index
    var maxHeight = 0;
    $('.content-description').each(function(){
        if ($(this).height() > maxHeight){
            maxHeight = $(this).height();
        }
    });

    $('.content-description').each(function(){
        $(this).height(maxHeight);
    })

// fix height codepen

    var maxHeightCodepen = 0;
    $('.pen-description h3').each(function(){
        if ($(this).height() > maxHeightCodepen){
            maxHeightCodepen = $(this).height();
        }
    });
    $('.pen-description h3').each(function(){
        $(this).height(maxHeightCodepen);
    })


// fix height khoahocList

    var maxHeightKhoaHocList = 0;
    $('.khoahoc-detail').each(function(){
        if ($(this).height() > maxHeightKhoaHocList){
            maxHeightKhoaHocList = $(this).height();
        }
    });
    $('.khoahoc-detail').each(function(){
        $(this).height(maxHeightKhoaHocList);
    })



});

