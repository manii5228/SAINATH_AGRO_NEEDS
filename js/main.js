/* =======================================================================================
    Template : Agroly
    Create :   Sept. 5th 2020
   ========================================================================================== */


/* ===============================================
    Function Call - Call Function Ones
   =============================================== */

   jQuery(document).ready(function () {
       "use strict";

       // here all ready functions

       loader();
       scroll_top();
       magnific_popup();
       accordion();

   });

/* ===============================================
    1. PRELOADER
   =============================================== */
function loader() {
    "use strict";
    setTimeout(function () {
        $('#loader-wrapper').fadeOut();
    }, 1500);
};

/* ===============================================
    2. SCROLL TOP
   =============================================== */
function scroll_top() {
    "use strict";
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

};

/* ===============================================
    3. COUNTER
   =============================================== */
   $('.counter').each(function () {
       var $this = $(this),
           countTo = $this.attr('data-count');
       $({
           countNum: $this.text()
       }).animate({
               countNum: countTo
           },

           {
               duration: 8000,
               easing: 'linear',
               step: function () {
                   $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                   $this.text(this.countNum);
                   //alert('finished');
               }

           });
   });

/* ===============================================
    4. TEAM CAROUSEL
   =============================================== */
   $('.testimonials-carousel .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: true,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.testimonials-carousel .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           576: {
               items: 2
           },
           1200: {
               items: 3
           }
       }
   });

/* ===============================================
    5. CLIENTS CAROUSEL
   =============================================== */
   $('.clients-carousel .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: true,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.clients-carousel .custom-nav',
       responsive: {
           0: {
               items: 2
           },
           576 : {
               items: 3
           },
           767 : {
            items: 4
           },
           1200: {
               items: 5
           }
       }
   });

/* ===============================================
    6. GALLERY CAROUSEL
   =============================================== */
   $('.wide-slider-layer .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.wide-slider-layer .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });

/* ===============================================
    7. GALLERY CAROUSEL
   =============================================== */
   $('.wide-slider-layer-alt-2 .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.wide-slider-layer-alt-2 .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });

/* ===============================================
    8. GALLERY CAROUSEL
   =============================================== */
   $('.testimonial-carousel-alt .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: true,
       margin: 0,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.testimonial-carousel-alt .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });

/* ===============================================
    9. NEWS CAROUSEL
   =============================================== */
   $('.news-carousel .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.news-carousel .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 3
           }
       }
   });

/* ===============================================
    10. TEAM CAROUSEL
   =============================================== */
    $('.team-carousel .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.team-carousel .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

/* ===============================================
    11. parallax-carousel
   =============================================== */
    $('.parallax-carousel .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: true,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.parallax-carousel .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

/* ===============================================
    12. ag-carousel
   =============================================== */
    $('.ag-carousel .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        navContainer: '.ag-carousel .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

/* ===============================================
    13. CUSTOM CAROUSEL
   =============================================== */
    $('.custom-carousel2 .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        navContainer: '.custom-carousel2 .custom-nav',
        responsive: {
            200: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

/* ===============================================
    14. MAGNIFIC POPUP GALLERY
   =============================================== */
    function magnific_popup() {
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

/* ===============================================
    15. YOUTUBE POPUP
   =============================================== */
   function video_popup() {
       var $btnLoadMore = $(
           '<div class="btn-wrapper text-center"><a href="#" class="btn load-more">Load More</a></div>'
       );
       var items = $(".youtube-popup[data-listnum]");
       var count = items.length;
       var slice = 2;
       var current = 0;

       if (items.length > slice) {
           //bind load more event
           $btnLoadMore.on("click", function (e) {
               e.preventDefault();
               loadMoreNews();
           });
           //append load more button
           items.closest(".salvattore-grid").after($btnLoadMore);
       }

       function getItem(listnum) {
           return items
               .filter(function (index) {
                   if ($(this).attr("data-listnum") == listnum) {
                       return true;
                   }
               });
       }

       function loadMoreNews() {
           var end = current + slice;
           if (end >= count) {
               end = count;
               $btnLoadMore.hide();
           }
           while (current < end) {
               var listnum = current + 1; //data-listnum : 1-based
               var item = getItem(listnum);
               if (item) {
                   item.fadeIn();
               }
               current++;
           }
       }

       //youtube popup
       $(".popup-youtube").magnificPopup({
           type: "iframe",
           removalDelay: 160,
           preloader: false,
           fixedContentPos: false,
           iframe: {
               markup: '<div class="mfp-iframe-scaler">' +
                   '<div class="mfp-close"></div>' +
                   '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                   "</div>",
               patterns: {
                   youtube: {
                       index: "youtube.com/",
                       id: "v=",
                       src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0"
                   }
               },
               srcAction: "iframe_src"
           }
       });

       //init load
       loadMoreNews();
   };

/* ===============================================
    16. FILTER GALLERY
   =============================================== */
   $(function () {
       var $margin = $("#kehl-grid").isotope({
           itemSelector: ".grid-box",
           // Different transition duration
           transitionDuration: "0.5s"
       });

       // on filter button click
       $(".filter-container li").click(function (e) {
           var $this = $(this);

           // Prevent default behaviour
           e.preventDefault();
           $('.filter li').removeClass('active');
           $this.addClass('active');

           // Get the filter data attribute from the button
           var $filter = $this.attr("data-filter");

           // filter
           $margin.isotope({
               filter: $filter
           });
       });
   });

/* ===============================================
    17. MASONRY GALLERY
   =============================================== */
    var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.grid-box',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    }); 
    });

/* ===============================================
    18. FAQ ACCORDION
   =============================================== */
   function accordion() {};
   $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

   $('.accordion a').click(function (j) {
       var dropDown = $(this).closest('li').find('p');

       $(this).closest('.accordion').find('p').not(dropDown).slideUp();

       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
       } else {
           $(this).closest('.accordion').find('a.active').removeClass('active');
           $(this).addClass('active');
       }

       dropDown.stop(false, true).slideToggle();

       j.preventDefault();
   });
   (jQuery)

  /* ===============================================
    19. ANIMATION
   =============================================== */
    AOS.init({
        duration: 1200,
    })

  /* ===============================================
    20. VIDEO POPUP
   =============================================== */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });
