// banner slider JS==
$(function () {

    jQuery('#demo1').skdslider({
        slideSelector: '.slide',
        delay: 5000,
        animationSpeed: 2000,
        showNextPrev: true,
        showPlayButton: true,
        autoSlide: true,
        animationType: 'fading'
    });

    $('.counter').counterUp({
        time: 2500,
        delay: 10,
    });

    $('.filter-menu ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    var mixer = mixitup('.filter-content');

    $('.venobox').venobox({
        spinner: 'wave',
        spinColor: '#dd0a4b',
        closeColor: 'red',
        framewidth: '500px',
    });


    $('.test-content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    var typed = new Typed('#type', {
        // Waits 1000ms after typing "First"
        strings: ['posuere augue venenatis', 'Web Design and developer', 'Digital MArketing', 'Youtube Marketing'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 150,
        loop: true,
    });
    var typed = new Typed('#typing', {
        // Waits 1000ms after typing "First"
        strings: ['Tweets', 'Updates', 'news', 'Programs'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 150,
        loop: true,
    });

    new WOW().init();

    //js form validation ==;
    var email = document.getElementById('email');

    function inp() {
        if (email.value == "") {
            email.style.border = "1px solid red";
            return false;
        };
    };


});



$(function () {
    'use strict';

    var backtotop = $('.back_to_top');
    var html_body = $('html, body');
    var full_menu = $('.menu-bg');

    //window scrol==
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }

        if (scrolling > 500) {
            full_menu.addClass('fixed-vab');
        } else {
            full_menu.removeClass('fixed-vab');
        }

    });


    //back to top click==
    backtotop.on('click', function () {
        html_body.animate({
            scrollTop: 0,
        }, 1500);
    });

    //animation scroll js

    $('.menu-bg .menu .menu-list a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});


//cursor create===;
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var preloader = document.getElementById('loading');

function loadFuntion() {
    preloader.style.display = 'none';
}
