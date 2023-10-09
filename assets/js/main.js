$(document).ready(function() {
    $(".slider-8").slick({
        slidesToShow: 8,
        infinite: false,
        arrows: false,
        slidesToScroll: 3,

        responsive: [{
                breakpoint: 1050,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 915,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                },
            },

            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },

            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});


// back to top 
$('.on-top').click(function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});