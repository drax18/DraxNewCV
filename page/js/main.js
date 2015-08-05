$(document).ready(function () {
    $(".sticky").sticky({topSpacing: 0}); // Sticky Menü
    
    $('.button-collapse').sideNav(); // Animált menü responsive
    
    $('.parallax').parallax(); // Parallax hátterek
    
    var height = window.innerHeight;    // Kezdőoldal magasság
    $('.myname').height(height);    
    
    var margintop = (window.innerHeight - 400) / 2; // Kezdőoldal középső div margin
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
  /*  setInterval(function(){ 
        $(".sub-myname h1, .sub-myname span").animate({left:200, opacity:"show"}, 1500);
    }, 500); */
    
    $('.myname .parallax-container .parallax').height(height);
    
    
    


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
