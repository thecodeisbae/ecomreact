var w = 0;
$(function() {
 "use strict";
    /* -------- preloader ------- */
    $(window).on("load", function() {
        $('#preloader').delay(2000).fadeOut(500);
    });

    /*------------ Sticky Header Slider ---------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90){  
            $('header, .top-scrolling').addClass("sticky");
        }
        else{
            $('header, .top-scrolling').removeClass("sticky");
        }
    });

    function responsive_dropdown () {
        /*------------ Responsive Menu ---------*/
        $(".menu-toggle").on("click", function(){
            $(".menu-toggle, .menu-left").toggleClass("active");
        });

        /*------------ Responsive Cart Dropdown ---------*/
        $(".cart-menu").on("click", function(){
            $(".cart-dropdown").toggleClass("open");
        });

        /* ---- For Mobile Menu Dropdown JS Start ---- */
        $('.menu span.opener').on("click", function() {
            if ($(this).hasClass("plus")) {
                $(this).parent().find('.megamenu').slideDown();
                $(this).removeClass('plus');
                $(this).addClass('minus');
            }
            else
            {
                $(this).parent().find('.megamenu').slideUp();
                $(this).removeClass('minus');
                $(this).addClass('plus');
            }
            return false;
        });

        /* ---- Responsive Search box ---- */
        $(".search-menu .search-btn").on("click", function(){
            if ( $(window).width() < 768 ){
                $(".sidebar-search-wrap").addClass("open");
            }
        });
        $(".search-closer").on("click", function(){
            if ( $(window).width() < 768 ){
                $(".sidebar-search-wrap").removeClass("open");
            }
        });

        $(".rating-summary-block span").on("click", function(){
            $(".product-review-des, .review-tab li:first-child a").removeClass("active");
            $(".product-review-des").removeClass("show");
            $(".product-review-com, .review-tab li:last-child a").addClass("active");
            $(".product-review-com").addClass("show");
        });

        $(".scrollTo").on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
               scrollTop: ($(target).offset().top)
            }, 1000);
        });
    };

    /*------------ Home Slider ---------*/
    if ($(".home-slider").length > 0) {
        $(".home-slider").owlCarousel({
            items: 1,
            loop:true,
            margin:0,
            nav:true,
            responsive: {
                0: {
                    dots: true,
                    nav:false,
                },
                768: {
                    nav:true,
                },
            }
        });
    }

    /*------------ Team Slider ---------*/
    if ($(".team-inner").length > 0) {
        $(".team-inner").owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            items: 1,
            mouseDrag: false,
            autoplaySpeed: 1000,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
            responsiveClass: true,
        });
    }

    /*------------ Latest Blog Slider ---------*/
    if ($(".latest-blog-salid").length > 0) {
        $(".latest-blog-salid").owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            items: 2,
            mouseDrag: false,
            autoplaySpeed: 1000,
            // autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                1200: {
                    items: 2,
                },
            }
        });
    }

    /*------------ Brand Slider ---------*/
    if ($(".brand-salider").length > 0) {
        $(".brand-salider").owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            items: 9,
            mouseDrag: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    dots: true,
                    nav:false,
                },
                768: {
                    items: 4,
                    dots: false,
                    nav:true,
                },
                992: {
                    items: 6,
                },
                1200: {
                    items: 9,
                },
            }
        });
    }

    $(document).ready(function() {
        responsive_dropdown ();
    });

    /* -------- Countdown Timer ------- */
    if ($(".countdown").length > 0) {
        var your_date = '2020-09-28 00:00:00';
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        var countDown = new Date(your_date).getTime(),
        x = setInterval(function() {    
            var now = new Date().getTime(),
                distance = countDown - now;
                document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }, second)
    }

    /* ---- For Footer JS Start ---- */
    $('.footer-static .footer-title, .footer-static span.opener').on("click", function() {
        if ($(this).parent('.footer-static').hasClass("active")) {
            if ( $(window).width() < 768 ){
                $(this).parent().find('.footer-block-contant').slideUp();
                $(this).parent('.footer-static').removeClass('active');
                $(this).parent().find('span.opener').addClass('plus');
                $(this).parent().find('span.opener').removeClass('minus');
            }
        }
        else
        { 
            if ( $(window).width() < 768 ){
                $(this).parent().find('.footer-block-contant').slideDown();
                $(this).parent('.footer-static').addClass('active');
                $('.footer-static.active span.opener').addClass('minus');
                $('.footer-static.active span.opener').removeClass('plus');
            }
        }
        return false;
    });

    /* ---- Category Sidebar JS Start ---- */
    $('.category-drop-down > li > a, .category-drop-down span.opener').on("click", function() {
        if ($(this).parent('.category-drop-down li').hasClass("active")) {
            $(this).parent().find('.category-sub').slideUp();
            $(this).parent('.category-drop-down > li').removeClass('active');
            $(this).parent().find('span.opener').addClass('plus');
            $(this).parent().find('span.opener').removeClass('minus');
        }
        else
        { 
            $(this).parent().find('.category-sub').slideDown();
            $(this).parent('.category-drop-down > li').addClass('active');
            $('.category-drop-down li.active span.opener').addClass('minus');
            $('.category-drop-down li.active span.opener').removeClass('plus');
        }
        return false;
    });

    /* ---- Product quantity plus minus JS ---- */
    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    /* ---- Quick Popup JS ---- */
    if ($(".quick-popup").length > 0) {
        $('.quick-popup').magnificPopup({
            type: 'iframe'
        });
    }
});