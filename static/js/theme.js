// js Document

    // Project Name : Troli - Tour and travel guide HTML5 Template;
    // Version      : 1.0.
    // Developed by : Heloshape (heloshape18@gmail.com)


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-main-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 5) sticky.addClass('sticky');
          else sticky.removeClass('sticky');

        });


        // -------------------------- scroll animate
        var links = $('a.scroll-target');
        links.on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
            var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 175,
                    }, 1000);
                    return false;
                }
            }
        });
        

        // ------------------- Modal Tabs
        if ($('.modal-content').length) { 
          $('.continue-button').on('click', function () {
            $('.modal-navs > li .active').parent('li').next('li').find('a').trigger('click');
            });
          $('.back-button').on('click', function () {
              $('.modal-navs > li .active').parent('li').prev('li').find('a').trigger('click');
          });
        }


        // ----------------------------- Counter Function
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
              timer.countTo();
          });
        }

        // ------------------------ Load More
        if($(".load-more").length) {
          $(".review-block").slice(0, 3).show();
            $(".load-more").on('click', function (e) {
                e.preventDefault();
                $(".review-block:hidden").slice(0, 2).slideDown();
                if ($(".review-block:hidden").length == 0) {
                    $(".load-more").fadeOut('slow');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);
            });
        }



          // ---------------------------- Select Dropdown
          if($('select').length) {
            $('.theme-select-menu').selectize();
          }

          // ---------------------------- Date Picker
          if($('input[name="daterange"]').length) {
            $('input[name="daterange"]').daterangepicker();
          }

          // ------------------- People Count
          if($('#total-people').length) {
            $('#adult, #children').keyup(function(){
               var adult = parseFloat($('#adult').val()) || 0;
               var children = parseFloat($('#children').val()) || 0;
               $('#total-people').val(adult + children);
            });
            $("#total-people").on('click', function() {
               $(".count-dropdown").toggleClass('show')
            })
            $(".apply-pepole").on('click', function() {
               $(".count-dropdown").removeClass('show')
            })
          }




          // ------------------------ Checkbox select
            if($(".docfile_up_radio").length) {
              $('.docfile_up_radio').on('click', function () {
                // left side data select and exits remove class
                $('.docfile_up_radio').removeClass('select');
                $(this).addClass('select');

                //right side data hide and how 
                $('.filedoc_of_identy').removeClass('show');
                  var showid=$(this).data('id');
                  $('#'+showid).addClass('show');
              });
            }


          // ------------------------------- Trip Finer Slider
          var tfSlider = $ (".trip-finder-slider");
          if(tfSlider.length) {
              tfSlider.owlCarousel({
                loop:true,
                nav:true,
                margin: 30,
                navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
                dots:false,
                autoplay:true,
                autoplayTimeout:4000,
                smartSpeed:1200,
                autoplayHoverPause:true,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:2
                      },
                      1100:{
                          items:3
                      }
                  },
            });
          }


          // ------------------------------- Local Ambassadors Slider
          var ambsSlider = $ (".ambassadors-slider");
          if(ambsSlider.length) {
              ambsSlider.owlCarousel({
                loop:true,
                nav:true,
                margin: 30,
                navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
                dots:false,
                autoplay:true,
                autoplayTimeout:4000,
                smartSpeed:1000,
                autoplayHoverPause:true,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:2
                      },
                      992:{
                          items:3
                      },
                      1100:{
                          items:4
                      }
                  },
            });
          }




          // ------------------------------- Destination Slider
          var dsSlider = $ (".ds-tour-slider");
          if(dsSlider.length) {
              dsSlider.owlCarousel({
                loop:true,
                nav:false,
                margin: 30,
                dots:true,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000,
                autoplayHoverPause:true,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      600:{
                          items:1
                      },
                      768:{
                          items:2
                      }
                  },
            });
          }


          // -------------------------------GAllery Slider
          var ligSlider = $ (".gallery-slider");
          if(ligSlider.length) {
              ligSlider.owlCarousel({
                loop:true,
                nav:true,
                navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
                margin: 0,
                dots:false,
                autoplay:true,
                autoplayTimeout:3000,
                smartSpeed:1000,
                autoplayHoverPause:true,
                lazyLoad:true,
                items:1,
            });
          }


          // ------------------------------- Blog Slider
          var bfSlider = $ (".blog-feature-slider");
          if(bfSlider.length) {
              bfSlider.owlCarousel({
                loop:true,
                nav:false,
                margin: 30,
                dots:true,
                autoplay:true,
                autoplayTimeout:2000,
                smartSpeed:1000,
                autoplayHoverPause:true,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:2
                      },
                      1200:{
                          items:3
                      }
                  },
            });
          }



          // ------------------------------- Blog Slider two
          var bf2Slider = $ (".blog-slider-two");
          if(bf2Slider.length) {
              bf2Slider.owlCarousel({
                loop:true,
                nav:false,
                margin: 30,
                dots:true,
                autoplay:true,
                autoplayTimeout:2000,
                smartSpeed:1000,
                autoplayHoverPause:true,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      600:{
                          items:1
                      },
                      768:{
                          items:2
                      }
                  },
            });
          }


          // ------------------------------- Testimonial Slider
          var tsSlider = $ (".testimonial-slider");
          if(tsSlider.length) {
              tsSlider.owlCarousel({
                loop:true,
                nav:true,
                navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
                margin: 15,
                dots:false,
                autoplay:true,
                autoplayTimeout:2000,
                smartSpeed:1000,
                autoplayHoverPause:true,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:2
                      },
                      1200:{
                          items:3
                      }
                  },
            });
          }



          // --------------------------------- Trip Filter
          if($("#js-grid-lightbox-trip-finder").length) {
            $('#js-grid-lightbox-trip-finder').cubeportfolio({
                filters: '#js-filters-trip-destination, #js-filters-trip-type, #js-filters-trip-country',
                layoutMode: 'grid',
                mediaQueries: [{
                    width: 1500,
                    cols: 4,
                }, {
                    width: 1100,
                    cols: 3,
                }, {
                    width: 768,
                    cols: 2,
                }, {
                    width: 480,
                    cols: 1,
                    options: {
                        caption: '',
                    }
                }],
                defaultFilter: '*',
                animationType: 'fadeOut',
                gapHorizontal: 0,
                gapVertical: 30,
                gridAdjustment: 'responsive',
                caption: 'overlayBottomAlong',
                displayType: 'fadeIn',
                displayTypeSpeed: 100,


                plugins: {
                    loadMore: {
                        element: '#js-loadMore-trip',
                        action: 'click',
                        loadItems: 3,
                    }
                },
            });

            $(".asia-filter-button").on('click', function () {
              $(".africa-filter").removeClass('show');
              $(".asia-filter").addClass('show')
            })

            $(".africa-filter-button").on('click', function () {
              $(".asia-filter").removeClass('show');
              $(".africa-filter").addClass('show');
            })

            $(".all-country-filter-button").on('click', function () {
              $(".asia-filter, .africa-filter").addClass('show');
            })

          }


          // ----------------------- Video Player
          if ($('#player').length) {
            const player = new Plyr('#player');
          }

          // -------------------- Mobile Menu
          if($('#mega-menu-holder').length) {
            $('#mega-menu-holder ul li.dropdown-holder, #mega-menu-holder ul li.sub-dropdown-holder').append(function () {
              return '<i class="fa fa-angle-down" aria-hidden="true"></i>';
            });
            $('#mega-menu-holder ul li.dropdown-holder .fa, #mega-menu-holder ul li.sub-dropdown-holder .fa').on('click', function () {
              $(this).parent('li').children('ul').slideToggle();
            }); 
          }



        

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


        // ------------------------------- AOS Animation
          // if ($("[data-aos]").length) { 
          //     AOS.init({
          //     duration: 1000,
          //     mirror: true,
          //     offset: 100,
          //   });
          // }


          // ------------------------------------- Fancybox
            if($(".fancybox").length) {
              var fancy = $ (".fancybox");
              if(fancy.length) {
                fancy.fancybox({
                  arrows: true,
                  buttons: [
                    "zoom",
                    //"share",
                    "slideShow",
                    //"fullScreen",
                    //"download",
                    "thumbs",
                    "close"
                  ],
                  animationEffect: "zoom-in-out",
                  transitionEffect: "zoom-in-out",
                });
              }
          }
                  


    });


})(jQuery);


