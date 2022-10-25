
$(document).ready(function () {
    $(window).on('load', function () {
        $('.preloader').addClass('complete')
    })
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd")
        } else {
            $(".sticky").removeClass("stickyadd")
        }
    })

    var typed = new Typed(".element", {
        strings: ['Tran Trung Kien', 'a Developer', 'a Student', 'a Single'],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // adding fadeInUp animation to child of div with class .way-col
    var $child = $('.way-fade-up');
    $child.each(function(){
        var self= $(this);
        $(this).waypoint(function(){
          self.addClass('animate__animated animate__fadeInUp');
        },{offset: '90%'});
    });

    var $child = $('.way-fade-left').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function(){
            self.addClass('animate__animated animate__fadeInLeft');
        }, { offset: '90%' });
    });

    var $child = $('.way-fade-right').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animate__animated animate__fadeInRight');
        }, { offset: '90%' });
    });

    // Progress bars
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute('style', 'width: 100%;transition: 1s all')
            p[1].setAttribute('style', 'width: 95%;transition: 1.5s all')
            p[2].setAttribute('style', 'width: 85%;transition: 1.7s all')
            p[3].setAttribute('style', 'width: 15%;transition: 2s all')
        },
        offset: '90%'
    });

    var filterizd = $('.filter-container').filterizr({
        animationDuration: .5,
    })

    //   Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        animateIn : "animate__fadeInRight"
    });

})