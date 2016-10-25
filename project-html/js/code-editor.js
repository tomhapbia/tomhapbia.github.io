/**
 * Created by Tom on 10/19/16.
 */

$(document).ready(function() {
	var fixHeightFolder = $('.folder').height();
    $('.fixHeightFolder').css('height', fixHeightFolder);
    
    $(window).resize(function(){
        var fixHeightFolder = $('.folder').height();
        $('.fixHeightFolder').css('height', fixHeightFolder);
    });
});

