$(window).scroll(function () {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".bluedouble").addClass("fixed");
    } else {
        $(".bluedouble").removeClass("fixed");
    }
});
