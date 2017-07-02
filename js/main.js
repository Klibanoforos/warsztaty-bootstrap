'use strict';

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("#main-nav").addClass("active");
        } else {
            $("#main-nav").removeClass("active");
        }
    });
    
    $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
    
});
