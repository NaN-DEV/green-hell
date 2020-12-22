// carusel core 
require('./core/core.js');


// carusel start 
window.addEventListener('load', function () {
    if (!!document.querySelector('#hero-home')) {
        window._ = new Glider(document.querySelector('#hero-home'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            draggable: true,
            scrollLock: true,
            rewind: true,
            arrows: {
                prev: '.back-0',
                next: '.next-0'
            },

        });
    }
    if (!!document.querySelector('#normal1')) {
        window._ = new Glider(document.querySelector('#normal1'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 370,
            draggable: true,
            scrollLock: true,
            dots: '#dots',
            arrows: {
                prev: '.back-1',
                next: '.next-1'
            },
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    }
    if (!!document.querySelector('#normal2')) {
        window._ = new Glider(document.querySelector('#normal2'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 370,
            draggable: true,
            scrollLock: true,
            arrows: {
                prev: '.back-2',
                next: '.next-2'
            },
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    }
    if (!!document.querySelector('#normal3')) {
        window._ = new Glider(document.querySelector('#normal3'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 370,
            draggable: true,
            scrollLock: true,
            arrows: {
                prev: '.back-3',
                next: '.next-3'
            },
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    }
    if (!!document.querySelector('#normal4')) {
        window._ = new Glider(document.querySelector('#normal4'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 370,
            draggable: true,
            scrollLock: true,
            arrows: {
                prev: '.back-4',
                next: '.next-4'
            },
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    }
    if (!!document.querySelector('#normal5')) {
        window._ = new Glider(document.querySelector('#normal5'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 370,
            draggable: true,
            scrollLock: true,
            arrows: {
                prev: '.back-5',
                next: '.next-5'
            },
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    }


    if (!!document.querySelector('#flota2')) {
        window._ = new Glider(document.querySelector('#flota2'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 370,
            draggable: true,
            scrollLock: true,
            arrows: {
                prev: '.back-6',
                next: '.next-6'
            },
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    }


});