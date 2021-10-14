jQuery(function ($) {
    'use strict',

    // Preloader
    $(window).load(function () {
        'use strict';
        $('.loader').fadeOut(3500);
        $('.preloader-tp').delay(3000).fadeOut('slow');

    })

    //small menu close
    $('.header-area .navbar-default .navbar-nav li a').on('click', function () {
        $('.navbar-collapse ').removeClass('in');
    });

    // onepage nav
    $('#nav').onePageNav();


    // Scroll Menu
    $(window).scroll(function () {
        if ($(".fixed-menu").offset().top > 50) {
            $(".fixed-menu").addClass("menu-border");

        } else {
            $(".fixed-menu").removeClass("menu-border");

        }
    });


    //  Parralax Js
    $('.parralax-banner').parallax("50%", 0.1);

    //  profile Pic slider Js
    $("#sing_prf_pic").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        items: 1,
        pagination: true,
        singleItem: true,

    });

//    Banner Text middle
    
    setInterval(function () {
        var widnowHeight = $(window).height();
        var introHeight = $(".slider-content").height();
        var paddingTop = widnowHeight - introHeight;
        $(".slider-content").css({
            'padding-top': Math.round(paddingTop / 2) + 'px',
            'padding-bottom': Math.round(paddingTop / 2) + 'px'
        });
    }, 10);
    
    
    
    
    
    //    progressbar js
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();


    //  Testimonial Slider Js
    $("#testimonial-demo").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        items: 1,
        pagination: true,
        singleItem: true,

    });

    // Scroll Top Js
    $('.scroll-top').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Magnic Pop For gallerY Pic
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });

});