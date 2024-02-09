$(document).ready(function(){
    $('.slider-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-btn">‹</button>',
        nextArrow: '<button class="next-btn">›</button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

function nextSlide() {
    $('.slider-wrapper').slick('slickNext');
}

function prevSlide() {
    $('.slider-wrapper').slick('slickPrev');
}