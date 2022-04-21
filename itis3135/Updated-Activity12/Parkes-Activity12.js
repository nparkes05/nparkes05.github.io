$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        captions: true,
        randomStart: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        speed: 3000,
        pager: true,
        pagerType: "short",
        pagerSelector: "#id_pager"
    });
});