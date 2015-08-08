$(document).ready(function () {
      
       
    $(".sticky").sticky({topSpacing: 0}); // Sticky Menü

    $('.button-collapse').sideNav(); // Animált menü responsive

    $('.parallax').parallax(); // Parallax hátterek
    
    
    
    $('a[href^="#"]').on('click', function (e) { // Animált anchor
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    var $aboutme = $('.aboutme');
    var $myworks = $('.myworks');
    var $contactme = $('.contactme');
// animate start
    $aboutme.waypoint(function () {
        $('.aboutme h1').addClass('animated slideInUp');
        $('.aboutme p').addClass('animated slideInUp');

    }, {offset: '90%'});
     $myworks.waypoint(function () {
        $('.myworks h1').addClass('animated slideInUp');
        $('.myworks p').addClass('animated slideInUp');

    }, {offset: '90%'});
     $contactme.waypoint(function () {
        $('.contactme').addClass('animated slideInUp');
        

    }, {offset: '90%'});
// animate end
});
