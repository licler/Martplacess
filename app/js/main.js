$(function(){
 

      $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: '13px'
      });
      $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: '30px'
      });


      $('.featured__slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/featured/next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 830,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
        ]
      });
      $('.followers__inner-box').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-btn--blue-theme slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--blue-theme slick-next"><img src="images/featured/next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true
            }
          },
          
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
        ]



      });

      $('.clients__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-btn--one-theme slick-prev slick-prev--one-theme"><img class="slick-prev--one-images" src="images/clients/arrows-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--one-theme slick-next slick-next--one-theme"><img class="slick-next--one-images" src="images/clients/arrows-right.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          },
          
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },



        ]





      });

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
      });

      $('.lnr-list').on('click', function(){
        $('.page__product-item').addClass('list');
        $('.lnr-list').addClass('active');
        $('.lnr-move').removeClass('active');
      });
      $('.lnr-move').on('click', function(){
        $('.page__product-item').removeClass('list');
        $('.lnr-move').addClass('active');
        $('.lnr-list').removeClass('active');
      });
      $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.product-one__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });


     
      $('.menu__big-btn').on('click', function(){
        $('.menu__list').slideToggle();
      });



      $('.header__wrapper-btn').on('click', function(){
        $('.header__wrapper').toggleClass('active');
      });
        
      
        




      $('.category__title-button').on('click', function(){
       $('.aside__category-title').toggleClass('aside__category-title--expanded');
        $('.category__list').toggleClass('category__list--active');
      })

      $('.filter__title-button').on('click', function(){
        $('.aside__filter-title').toggleClass('aside__filter-title--expanded');
         $('.filter__list').toggleClass('filter__list--active');
       })

       $('.price__title-button').on('click', function(){
        $('.aside__price-title').toggleClass('aside__price-title--expanded');
         $('.price-range__list').toggleClass('price-range__list--active');
       })
       
      // $('.version__title-button').on('click', function(){
      //   $('.version__category-title').toggleClass('version__category-title--expanded'); 
      //    $('.version__category-inner').toggleClass('version__category-inner--active');
      //  })





  var mixer = mixitup('.products__inner-box');


});