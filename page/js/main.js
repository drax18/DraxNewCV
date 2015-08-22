$(document).ready(function () {

    // Percent

    var killit =  setInterval(function(){checker()},1);
    function checker(){
        if ($(".html5 .bar").hasClass("go")) {
            $('.html5 .percent').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: 85
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            clearInterval(killit);
        }
    }
    var killit2 =  setInterval(function(){checker2()},1);
    function checker2(){
        if ($(".css3 .bar").hasClass("go")) {
            $('.css3 .percent').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: 75
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            clearInterval(killit2);
        }
    }
    var killit3 =  setInterval(function(){checker3()},1);
    function checker3(){
        if ($(".javascript .bar").hasClass("go")) {
            $('.javascript .percent').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: 60
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            clearInterval(killit3);
        }
    }
    // Nice scroll
    $("html").niceScroll({cursorcolor:"#4db6ac"});

    // Menu translate
    function isSafari() {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    }

    function isChrome() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }

    $('.ssm-open-nav').click(function() {

        if($('nav').hasClass('ssm-nav-visible')) {

            if(isSafari() || isChrome()) {
                $('nav').css('-webkit-transform', 'translate(' + 280 + 'px,0)');

            }else{
                $('nav').css('transform', 'translate(' + 280 + 'px,0)');

            }
            $('nav .ssm-open-nav').removeClass('close-navigation');
            $('nav').removeClass('ssm-nav-visible');
            $('.ssm-overlay').fadeOut();
        }
        else{
            if(isSafari() || isChrome()) {
                $('nav').css('-webkit-transform', 'translate(' + 0 + 'px,0)');
            }else{
                $('nav').css('transform', 'translate(' + 0 + 'px,0)');
            }

            $('nav .ssm-open-nav').addClass('close-navigation');
            $('nav').addClass('ssm-nav-visible');
            $('.ssm-overlay').fadeIn();
        }
    });
    $('nav ul li a').click(function(event){
        event.preventDefault();
        if(isSafari() || isChrome()) {
            $('nav').css('-webkit-transform', 'translate(' + 280 + 'px,0)');

        }else{
            $('nav').css('transform', 'translate(' + 280 + 'px,0)');

        }
        $('nav .ssm-open-nav').removeClass('close-navigation');
        $('nav').removeClass('ssm-nav-visible');
        $('.ssm-overlay').fadeOut();

    });
    $('.ssm-overlay').click(function(event2){
        event2.preventDefault();
        $('nav').removeClass('ssm-nav-visible');
        $('.ssm-overlay').fadeOut();
        $('nav').css('transform', 'translate(' + 280 + 'px,0)');
    });

    // preloader
        setInterval(function(){
            $("#loader").animate({ opacity: 0 });
            $("#loader div").animate({ opacity: 0 });
        }, 1500);
        setInterval(function(){
            $("#loader").css('display','none');
        }, 2000);

    //parallax
    $('.parallax-window').parallax({imageSrc: 'page/img/background1.png'});

    // Anchor
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
    // Email
    setInterval(function(){
        $('.emailsuccess').empty();
    }, 5500);

});
