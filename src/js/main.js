// Defining a function to set size for #hero 

function fullscreenHeroSection() {
    if (!$('body').hasClass('home-page')) {
        return;
    }
    $('.hero-section').css({
        height: $(window).height() - 30
    });
}

function fixedHeader() {

    var setHeader = function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    }
    try {
        setHeader();
        $(window).scroll(setHeader).resize(setHeader);
    } catch (error) {
        console.log(error);
    }
}

function headerParralax() {
    /*jumbotron parallax */
    var setParallax = function () {
        $(window).scroll(function () {
            $('.hero').css({
                'bottom': -($(this).scrollTop() / 2) + "px" // increase # to make even slower
            });
        });
    }
    try {
        setParallax();
        $(window).scroll(setParallax).resize(setParallax);
    } catch (error) {
        console.log(error);
    }
}

var contentWayPoint = function () {
    var i = 0;

    $('.animate-box').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

            i++;

                        $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .animate-box.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }

                        el.removeClass('item-animate');
                    }, k * 400, 'easeInOutExpo');
                });

            }, 100);

        }

    }, {
        offset: '85%'
    });

    $('.animate-box-home').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .animate-box-home.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }

                        el.removeClass('item-animate');
                    }, k * 150, 'easeInOutExpo');
                });

            }, 400);

        }

    }, {
        offset: '80%'
    });


};

function detectOS() {

    var os = window.ui.os;
    var browser = window.ui.browser;


    switch (os) {
        case 'Windows':
            $('body').addClass('windows');
            break;
        case 'Mac OS X':
            $('body').addClass('mac-os');
            break;
        case 'Linux':
            $('body').addClass('linux');
            break;
        case 'Android':
            $('body').addClass('android');
            break;
        case 'iOS':
            $('body').addClass('ios');

    }


    if (browser.indexOf('Chrome') > -1) {
        $('body').addClass('chrome');
    } else if (browser.indexOf('Internet') > -1) {
        $('body').addClass('ie');
    } else if (browser.indexOf('Safari') > -1) {
        $('body').addClass('safari');
    } else if (browser.indexOf('Opera') > -1) {
        $('body').addClass('opera');
    } else if (browser.indexOf('Firefox') > -1) {
        $('body').addClass('firefox');
    }
};


function MobileMeniu() {

    $(".mobile-button").click(function () {
    
        $(this).toggleClass("open");

    });

   // $(".mobile-button").on('mousedown touchstart', function() {
        // $('body').on('click', '.mobile-button', function(){
        //     alert($(this).hasClass("open"));
    
        //     if ($(this).hasClass("open"))
        //     {
        //         $(this).removeClass("open");
        //     }else{
        //         $(this).addClass("open");
        //     }
        //     //$(this).toggleClass("open");
    
        // });

};

$(document).ready(function () {
    try {
        fullscreenHeroSection();
    } catch (error) {
        console.log(error);
    }
    try {
        fixedHeader();
    } catch (error) {
        console.log(error);
    }
    try {
        headerParralax();
    } catch (error) {
        console.log(error);
    }
    try {
        contentWayPoint();
    } catch (error) {
        console.log(error);
    }
    try {
        detectOS();
    } catch (error) {
        console.log(error);
    }

    try {
        MobileMeniu();
    } catch (error) {
        console.log(error);
    }

    try {
        $('.pgwSlideshow').pgwSlideshow({
            //autoSlide: true
            transitionEffect: "fading"
        });

        $('.carousel').carousel();
        //pgwSlideshow.stopSlide();
        
    } catch (error) {
        console.log(error);
    }
});

