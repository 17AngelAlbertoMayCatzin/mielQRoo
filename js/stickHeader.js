$(document).ready(function(){
    var fixedHeader = $('#headerFixed');
    $(window).on('scroll', function(){
        var proyectosOffsetTop = $('#comerciantesScroll').offset().top;
        if($(window).scrollTop()>= proyectosOffsetTop){
            fixedHeader.css('margin-top', 0)
        }else if($(window).scrollTop()<= proyectosOffsetTop){
        
            fixedHeader.css('margin-top','-80px');
        }
    });
});