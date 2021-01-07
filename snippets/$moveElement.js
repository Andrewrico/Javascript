$(window).scroll(function() {
    if ($(this).scrollTop() > 60 && $(window).width() >= 767) {
        $('#l2').appendTo($('#discountninja-sticky-lg'))
        $(".limoniapps-discountninja-headersection").detach().appendTo($('#discountninja-sticky-lg'))
    } else {
        $('#l1').appendTo($('#discountninja-sticky-sm'))
        $(".limoniapps-discountninja-headersection").detach().appendTo($('#discountninja-sticky-sm'))
    }
});
