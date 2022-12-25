$(document).ready(function () {
    $('.bxslider').bxSlider({
        pager: false,
    });
});
$(document).ready(function () {
    $('.bxslider_team').bxSlider({
        pager: true,
    });
});
$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true

    })
})
$(document).ready(function () {
    $('.accordion').accordion({
        defaultOpen: ''
    });
});
/*$(function () {
    let filterList = {
        init: function () {
            $('.workportfolio').mixitup({
                targetSelecttor: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'span'

            });
        },
    };
    filterList.init();
});*/

$(document).ready(function ($) {
    $('.primaru-nav-trigger').on('click', function () {
        $('.menu-icon').toggleClass('is-clicked');
        $('.primaru-nav').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
    });
});

