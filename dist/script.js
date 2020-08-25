jQuery(function ($) {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        autoHeight: true,
    });

    //nie skonczona paginacja

    // $('.swiper-container .swiper-slide').each(function () {
    //     $('.my-own-pagination').append('<div class="dot"></div>');
    // })
})