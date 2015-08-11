$(document).ready(function() {
    $('.nav li a').mouseover(function() {
        $(this).parent().addClass('hovered');
    });
    $('.nav li a').mouseleave(function() {
        $(this).parent().removeClass('hovered');
    });
});
