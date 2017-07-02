'use strict';

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#main-nav").addClass("active");
    } else {
       $("#main-nav").removeClass("active");
    }
});