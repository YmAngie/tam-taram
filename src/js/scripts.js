// load more
$(function () {
    if($(window).width() < 768) {
        $(".js-video-stepbystep__link").slice(0, 3).show();
        $("#loadMoreStepByStep").click(function (e) {
            e.preventDefault();
            $(".js-video-stepbystep__link:hidden").slice(0, 3).slideDown();
        });
    }
});

// slick slider
$(document).ready(function() {
    $('.js-responsive').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
});

// slick slider fix unslick
$(window).resize(function() {
    $('.js-responsive').slick('resize');
});

$(window).on('orientationchange', function() {
    $('.js-responsive').slick('resize');
});