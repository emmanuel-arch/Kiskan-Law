// Team Section Slider
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.team-carousel')) {
        new Swiper('.team-carousel', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 20000,
                disableOnInteraction: false
            },
            speed: 5000,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            on: {
                init: function() {
                    setTimeout(function() {
                        document.querySelector('.team-carousel').style.opacity = '1';
                    }, 100);
                }
            }
        });
    }
});