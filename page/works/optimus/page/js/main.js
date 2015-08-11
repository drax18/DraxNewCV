$(document).ready(function() {


    if ($(window).width() > 765) {
          $("ul.topnav li a span").click(function() {

            $(this).parent().parent().find("ul.subnav").css('display', 'block');

            $(this).parent().parent().click(function() {
            }, function() {
                $(this).parent().parent().find("ul.subnav").css('display', 'none');
            });

        });
    } else {
        $("ul.topnav li a span").hover(function() {

            $(this).parent().parent().find("ul.subnav").css('display', 'block');

            $(this).parent().parent().hover(function() {
            }, function() {
                $(this).parent().parent().find("ul.subnav").css('display', 'none');
            });

        });
        $('ul.subnav').hover(function() {
            $(this).parent().find('a').children('span').addClass('active-slide');
            $(this).show();
        });
        $('ul.subnav').mouseleave(function() {
            $(this).parent().find('a').children('span').removeClass('active-slide');
            $(this).hide();
        });
    }

   

});
