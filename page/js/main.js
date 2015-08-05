$(document).ready(function () {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var height = window.innerHeight - 64;
    $('.myname').height(height);
    var margintop = (window.innerHeight - 464) / 2;
    
    $('.sub-myname').css("margin-top",margintop);
   
    var options = [
        
         {selector: '.draxi', offset: 0, callback: 'Materialize.fadeInImage(".draxi")' }
        
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
