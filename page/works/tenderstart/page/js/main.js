$(document).ready(function() {
    if ($(window).width() > 768) {
        $('.circles div').click(function(e) {
            e.preventDefault();
            $('.circles div').removeClass('selected');
            $(this).addClass('selected');
        });
         $('.circles div a').click(function(e) {
            e.preventDefault();
            $('.circles div').removeClass('selected');
            $(this).parent().addClass('selected');
        });
      
    }

});
