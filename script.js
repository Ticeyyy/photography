$(document).ready(function() {
    const imageFolder = 'assets/images/';
    let index = 1;

    function loadImages() {
        const imagePath = `${imageFolder}photo${index}.jpg`;

        $.get(imagePath)
            .done(function() {
                $('.carousel').append(`<div><img src="${imagePath}" alt="Photo"></div>`);
                index++;
                loadImages();  // Continue loading the next image
            })
            .fail(function() {
                // Stop loading when a 404 or missing image is encountered
                initializeCarousel();
            });
    }

    function initializeCarousel() {
        $('.carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    loadImages();
});
