$(document).ready(function() {
    if ($(window).width() > 1200) {
        $('.bxslider').bxSlider({
            slideWidth: 134,
            minSlides: 2,
            maxSlides: 6,
            moveSlides: 1,
            slideMargin: 10,
            pager: false
        });
    } else {
        $('.bxslider').bxSlider({
            slideWidth: 134,
            minSlides: 2,
            maxSlides: 5,
            moveSlides: 1,
            slideMargin: 10,
            pager: false
        });
    }
    if ($('.left-hotel').height() > $('.right-hotel').height()) {
        $('.right-hotel').css("height", $('.left-hotel').height());
    }
});
