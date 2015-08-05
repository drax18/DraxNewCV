$(document).ready(function () {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var height = window.innerHeight;
    $('.myname').height(height);
    var margintop = (window.innerHeight - 400) / 2;

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.sub-myname').css("margin-top", margintop);

    var options = [
        {selector: '.draxi', offset: 0, callback: 'Materialize.fadeInImage(".draxi")'}

    ];

    Materialize.scrollFire(options);
    $(".button-collapse").sideNav();
    /*
     
     $(".topnav li a").hover(function () {
     $(this).parent().find(".subnav").css('display', 'block');
     });
     $(".subnav").hover(function () {
     $(this).hover(function () {
     }, function () {
     $(".subnav").css('display', 'none');
     });
     });
     */

});
