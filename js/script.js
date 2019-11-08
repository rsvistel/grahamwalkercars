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

    $('#carouselExampleControls').carousel({
        interval: false
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
    }

    $('.image-input').click(function () {
        $('.image-input-container input').click();
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
    $(".car-like").click(function (e) {
        $(this).toggleClass('liked');
        if ($(this).hasClass('liked')) {
            $(this).find('img').attr('src', 'img/heart-red.svg')
            //e.preventDefault();
        } else {
            $(this).find('img').attr('src', 'img/home/heart.svg')
            //e.preventDefault();
        }
    });

        $('.mobile-menu-btn').click(function() {
        $('.menubar').toggleClass('right');
        // $('.overlay').toggleClass('active');
        // $('body').toggleClass('active-menu');
        $('.mobile-menu-btn').toggleClass('indexcity');
    });

    $('.btn-search').click(function() {
        // $('.overlay').toggleClass('active');
        // $('body').toggleClass('active-menu');
        $('.btn-search').toggleClass('indexcity');
    });
});