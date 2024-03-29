$(document).ready(function () {
    $('.mobile-open').click(function () {
        $(this).find('object').toggle();
        $('.bottom-half-header').toggle();
    });

    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".unactive").addClass("accordion__up-icon").removeClass("accordion__down-icon");
    });
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".unactive").removeClass("accordion__down-icon").addClass("accordion__up-icon");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".unactive").removeClass("accordion__up-icon").addClass("accordion__down-icon");
    });

    $('#collapseThree .switch .slider').click(function () {
        $('.total-price, .monthly-price').toggle()
    });

    $('#accordion .card h5 button').click(function () {
        $(this).closest('.card-header').toggleClass('opened');
        $('.card-header').each(function () {
            var card = $(this);
            if ($(this).hasClass('opened')) {
                card.find('h5').click()
            }
        });
    });

    $('.car-modal-open').click(function () {
        $('.modal-used-cars').css('display', 'flex')
    });

    $('.car-modal-close').click(function () {
        $('.modal-used-cars').css('display', 'none')
    });

    $('#accordion .card .card-body button').click(function () {
        $(this).closest('.card-body').find('.checkbox-container').toggleClass('opened');
        if ($(this).html().indexOf("Show") >= 0) {
            $(this).html($(this).html().replace("Show", "Hide"));
        } else {
            $(this).html($(this).html().replace("Hide", "Show"));
        }
    });

    $('.block-used-cars .filter-navigation-menu .filters .col-md-6 ul li').click(function () {
        $(this).find('i').toggleClass('fa-caret-down').toggleClass('fa-caret-up')
    });

    $('#mobile-filter ul li').click(function () {
        $('#mobile-filter span').html($(this).html());
    });

    $('#mobile-filter, .close-filter-trigger').click(function () {
        if (!$('.close-filter-trigger').hasClass('accordion-opened')) {
            $('#mobile-filter ul').toggleClass('opened');
            $('.close-filter-trigger').toggleClass('opened');
        }
    });

    $('.close-filter-trigger').click(function () {
        if ($('#accordion').hasClass('opened')) {
            $('#accordion').toggleClass('opened');
        }
        $('.close-filter-trigger').toggleClass('accordion-opened');
    });

    $('.accordion-tumbler').click(function () {
        $('#accordion').toggleClass('opened');
        $('.close-filter-trigger').toggleClass('accordion-opened');
    });

    $('#ShowMoreResults').click(function () {
        $('#accordion.cards-serch-results').toggleClass('expanded');

    });

    $(".more").click(function () {
        var elem = $(".more").text();
        if (elem == "more") {
            $(".more").text("less");
            $(".complete").show();
            $(".more-icon").addClass('fa-angle-up').removeClass('fa-angle-down');

        } else {
            $(".more").text("more");
            $(".complete").hide();
            $(".more-icon").addClass('fa-angle-down').removeClass('fa-angle-up');
        }
    });
    if ($('body').hasClass('shortlist') && !$('.shortlist .car-tile').length) {
        $('.empty-shortlist-message').show()
        $('.shortlist #special-offers').css("margin-bottom", "0");
    }

    $('.image-input').click(function () {
        $('.image-input-container input').click();
    });

    if ($('body').hasClass('car-page')) {
        var activeItem = 0;
        var carouselItems = [];
        $('#carouselExampleControls .carousel-item').each(function () {
            carouselItems.push($(this));
        });
        console.log(activeItem);
        $('.num.mobile-counter__value').html(activeItem + ' of ' + carouselItems.length);
        $('.carousel-control-next').click(function () {
            if (activeItem < carouselItems.length) {
                activeItem++
            } else {
                activeItem = 1
            }
            $('.num.mobile-counter__value.counter__value').html(activeItem + ' of ' + carouselItems.length);
        });
        $('.carousel-control-prev').click(function () {
            if (activeItem > 1) {
                activeItem--
            } else {
                activeItem = carouselItems.length
            }
            $('.num.mobile-counter__value').html(activeItem + ' of ' + carouselItems.length);
        });
    }
    $(".car-tile .car-image .car-like img, .slideshow-shape-img").click(function (e) {
        $(this).toggleClass('liked');
        if ($(this).hasClass('liked')) {
            $(this).attr('src', 'img/heart-red.svg')
            e.preventDefault();
            e.stopPropagation();
        } else {
            $(this).attr('src', 'img/home/heart.svg')
            e.preventDefault();
            e.stopPropagation();
        }
    });

        $('.mobile-menu-btn').click(function() {
        // $('.menubar').toggleClass('right');
        // $('.overlay').toggleClass('active');
        // $('body').toggleClass('active-menu');
        $('.mobile-menu-btn').toggleClass('indexcity');
    });

    $('.btn-search').click(function() {
        // $('.overlay').toggleClass('active');
        // $('body').toggleClass('active-menu');
        $('.btn-search').toggleClass('indexcity');
    });

    if ($('body').hasClass('car-page')) {
        var activeItem = 1;
        var carouselItems = [];
        $('#carouselExampleControls .carousel-item').each(function () {
            carouselItems.push($(this));
        });
        $('.num.mobile-counter__value').html(activeItem + ' of ' + carouselItems.length);
        $('.carousel-control-next').click(function () {
            if (activeItem < carouselItems.length) {
                activeItem++
            } else {
                activeItem = 1
            }
            $('.num.mobile-counter__value.counter__value').html(activeItem + ' of ' + carouselItems.length);
        });
        $('.carousel-control-prev').click(function () {
            if (activeItem > 1) {
                activeItem--
            } else {
                activeItem = carouselItems.length
            }
            $('.num.mobile-counter__value').html(activeItem + ' of ' + carouselItems.length);
        });
    }

    if ($('body').hasClass('car-page')) {

        var carouselItems = [];
        $('#carousel-thumb #thumb-inner .carousel-item').each(function () {
            carouselItems.push($(this));
        });
        $('#carousel-example-multi').css('height', $('#thumb-inner .carousel-item').outerHeight());
        $('#slideshow-counter span').html($('#carousel-thumb .carousel-item.active').index()-1 + ' of ' + carouselItems.length);
        $('#carousel-thumb').bind('slide.bs.carousel', function (e) {
            setTimeout(function () {
                $('#slideshow-counter span').html($('#carousel-thumb .carousel-item.active').index()-1 + ' of ' + carouselItems.length);
            }, 650);
        });
        $('#thumb-inner').click(function () {
            $('#carousel-example-multi').removeClass('vertical').css('height', 'auto');
            $('#carousel-thumb, #car-title, #car-accordion, #car-detail-value, #reviews-car-detail, #description-car-detail, .carousel-close, .footer, .carousel-close-mobile, #slideshow-counter, #slideshow-shape, .car-detail-button-mobile, .line-detailse-full').addClass('fullscreen');
            $('.car-page .header').addClass('fullscreen');
            $('.accordion-used-car').addClass('fullscreen');
            $('.car-detail-main-section').addClass('fullscreen');

            $('body').append('<div class="overlay"></div>');
        });

        $('.carousel-close, .carousel-close-mobile').click(function () {
            $('#carousel-thumb, #car-title, #car-accordion, #car-detail-value, #reviews-car-detail, #description-car-detail, .carousel-close, .footer, .carousel-close-mobile, #slideshow-counter, #slideshow-shape, .car-detail-button-mobile, .line-detailse-full').removeClass('fullscreen');
            $('.car-page .header').removeClass('fullscreen');
            $('.car-detail-main-section').removeClass('fullscreen');
            $('.accordion-used-car').removeClass('fullscreen');
            $('.overlay').remove();
            $('#carousel-example-multi').css('height', $('#thumb-inner .carousel-item').outerHeight());
        });

    }
    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<5;i++) {
            next=next.next();
            if (!next.length) {
                next=$(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $('#carousel-example-multi').carousel({
        interval: false
    });

    $('.mobile-menu').click(function () {
        $('.menubar').animate({left: '30%'});
        // $('body, .navbar').animate({left: '-70%'})
    });
    $('.menubar .mobile-close-btn').click(function () {
        $('.menubar').animate({left: '100%'});
        // $('body, .navbar').animate({left: '0'})
    });
    $('.mobile-phone').click(function () {
        $('.phonebar').animate({left: '30%'});
        // $('body, .navbar').animate({left: '-70%'})
    });
    $('.phonebar .mobile-close-btn').click(function () {
        $('.phonebar').animate({left: '100%'});
        // $('body, .navbar').animate({left: '0'})
    });
    $('.btn-search').click(function () {
        $('.menu-search').animate({left: '0'});
        // $('body').animate({left: '74%'});
        // $('.navbar').animate({left: '74%'})
            // .css('width', 'auto')
    });
    $('.navbar-toggler.mobile-search-btn.btn-search').click(function () {
        $('.menu-search').animate({left: '-74%'});
        // $('body').animate({left: '0'});
        // $('.navbar').animate({left: '0'}, { complete: function () { $('.navbar').css('width', '100%') }})
    })
});