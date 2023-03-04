$(function() {
    
    window.onload = cmnWindowOnload();

    function cmnWindowOnload () {
        // init out load layout
        init();
    }

    $( window ).resize(function() {
        $( "body" ).css('width', $( window ).width() + "px");
        $( "body .bannerHome").find("img").css('width', $( window ).width() + "px");
        $( "body .carousel").find("carousel-control").css('height', $("body .carousel").height() + "px");
        $( "body .carousel").find("carousel-item").css('height', $("body .carousel").height() + "px");
        $( "body .carousel .carousel-item").find("img").css('height', $("body .carousel").height() + "px");
        $( "body .grid-both .col-custom").find("img").css('width', $("body .grid-both .col-custom").width() + "px");
    });

    function init() {
        // set width body
        $( "body" ).css('width', $( window ).width() + "px");
        $( "body .bannerHome").find("img").css('width', $( window ).width() + "px");
        var heightCarousel = $("body .carousel").height();
        $( "body .carousel").find("carousel-control").css('height', heightCarousel + "px");
        $( "body .carousel").find("carousel-item").css('height', $("body .carousel").height() + "px");
        $( "body .carousel .carousel-item").find("img").css('height', $("body .carousel").height() + "px");
        $( "body .grid-both .col-custom").find("img").css('width', $("body .grid-both .col-custom").width() + "px");
    }
});
