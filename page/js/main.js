$(document).ready(function () {
    var screenheight = screen.height;
    var screenwidth = screen.width;
    if ((screenheight == 1080) && (screenwidth == 1920)) {
        $('.myname .parallax-container .parallax img').addClass('bugfixer');
    }
    $(window).scroll(function () {
        $('.myname .parallax-container .parallax img').removeClass('bugfixer');
    });
    $(".sticky").sticky({topSpacing: 0}); // Sticky Menü

    $('.button-collapse').sideNav(); // Animált menü responsive

    $('.parallax').parallax(); // Parallax hátterek
    $('.myname').height($(window).height());
    $(window).on('resize', function () {
        $('.myname').height($(window).height());
    });

    $('a[href^="#"]').on('click', function (e) { // Animált anchor
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 64
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    var $aboutme = $('.aboutme');

    $aboutme.waypoint(function () {
        $('.aboutme h4').addClass('animated fadeInLeft');

        $('.aboutme p').addClass('animated fadeInLeft');


    }, {offset: '100%'});

});
