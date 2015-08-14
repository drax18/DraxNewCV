$(document).ready(function () {
      $tabh = $(window).height();
      
      if($tabh < 539){
          $('.sub-myname div').css('height',250 + 'px');          
          $('.sub-myname div').css('width',250 + 'px');
          $('.sub-myname h1').css('font-size',30 + 'px');
          $('.sub-myname span').css('padding-right',30 + 'px');
          $('.downbutton div').css('font-size',30 + 'px');
          $('.downbutton div').css('padding-bottom',5 + 'px');
      }
       
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
    
     $('[data-toggle="tooltip"]').tooltip();
     
    var $aboutme = $('.aboutme');
    var $infosaboutme = $('.infosaboutme');
    var $myworks = $('.myworks');
    var $contactme = $('.contactme');
    var $bars = $('.bars');
    
    
// animate start 

    $aboutme.waypoint(function () {
        $('.aboutme h1').addClass('animated slideInUp');
        $('.aboutme p').addClass('animated slideInUp');
        

    }, {offset: '95%'});
     $myworks.waypoint(function () {
        $('.myworks h1').addClass('animated slideInUp');
        $('.myworks p').addClass('animated slideInUp');

    }, {offset: '95%'});
    
     $infosaboutme.waypoint(function () {
        $('.infosaboutme .row div').addClass('animated bounceInUp');
        

    }, {offset: '90%'});
    
     $contactme.waypoint(function () {
        $('.contactme h1').addClass('animated slideInUp');
        $('.contactme .row').addClass('animated bounceInUp');
        

    }, {offset: '95%'});
    
    $bars.waypoint(function () {
        $('.bars ul li span').addClass('animated fadeInLeft');
        
        

    }, {offset: '95%'});
// animate end
    setInterval(function(){ 
        $('.emailsuccess').empty();
    }, 5500);

});
