$(document).ready(function () {
    $(".sticky").sticky({topSpacing: 0}); // Sticky Menü
    
    $('.button-collapse').sideNav(); // Animált menü responsive
    
    $('.parallax').parallax(); // Parallax hátterek
    
    var height = window.innerHeight - 64;    // Kezdőoldal magasság
    $('.myname').height(height);    
    
    var margintop = (window.innerHeight - 464) / 2; // Kezdőoldal középső div margin
    $('.sub-myname').css("margin-top", margintop);

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
    
    
    
    $('.aboutme').on('appear', function(event, $all_appeared_elements) {
      alert("asd");
    });
    
    



});
