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

// fix unslick in slick slider
$(window).resize(function() {
    $('.js-responsive').slick('resize');
});

$(window).on('orientationchange', function() {
    $('.js-responsive').slick('resize');
});


// // find appropriate className
// if(document.querySelector('.js-top-search__submit')) {
//     const submitClassName = '.js-top-search__submit';
//     const inputClassName = '.js-top-search__input';
// }
// if (document.querySelector('.js-bottom-search__submit')) {
//     const submitClassName = '.js-bottom-search__submit';
//     const inputClassName = '.js-bottom-search__input';
// }

// show-hide search top-input
document.querySelector('.js-top-search__submit').addEventListener('click', function() {
    event.preventDefault();
    const element = document.querySelector('.js-top-search__input');
    show(element, 'show', 'hide');
});

// show-hide search bottom-input
document.querySelector('.js-bottom-search__submit').addEventListener('click', function() {
    event.preventDefault();
    const element = document.querySelector('.js-bottom-search__input');
    show(element, 'show', 'hide');
});

function show(element, addClass, delClass) {
    if (element.classList.contains('hide')) {
        element.classList.add(addClass);
        element.classList.remove(delClass);
    } else {
        element.classList.add(delClass);
        element.classList.remove(addClass);
    }
}


// submit top-form by enter key
document.querySelector('.js-top-search__input').addEventListener("keydown", function(e) {
    const text = document.querySelector('.js-top-search__input').value;
    const parameters = { text: text };

    const searchForm = document.getElementById('top-search');

    if (e.keyCode === 13) { sendRequest(searchForm, 'http://localhost:3000/', parameters); }
});

// submit bottom-form by enter key
document.querySelector('.js-bottom-search__input').addEventListener("keydown", function(e) {
    const text = document.querySelector('.js-bottom-search__input').value;
    const parameters = { text: text };

    const searchForm = document.getElementById('bottom-search');

    if (e.keyCode === 13) { sendRequest(searchForm, 'http://localhost:3000/', parameters); }
});

function sendRequest(form, path, parameters) {
    event.preventDefault();
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.setAttribute('type', 'hidden');
            hiddenField.setAttribute('name', key);
            hiddenField.setAttribute('value', parameters[key]);
            form.appendChild(hiddenField);
        }
    }
    form.submit();
}


