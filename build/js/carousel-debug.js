$(document).ready(function () {
  $('.carousel__wrapper').slick({
    infinite: true,
    slidesToScroll: 3,
    speed: 300,
    arrows: true,
    /*  autoplay: true, */
    /*     variableWidth: true, */

    slidesToShow: 6,
    /*    autoplaySpeed: 2000, */
    prevArrow: `<button type="button" class="slick-arrow slick-prev">
              <img
                src="./img/icon-arrow-left.svg"
                alt="arrow left"
                class="carousel__arrow"
                width="25"
                height="8"
              >
          </button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next">
            <img
            src="./img/icon-arrow-right.svg"
            alt="arrow left"
            class="carousel__arrow"
            width="25"
            height="8"
          >
          </button>`,
    responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },

    ]
  });

  new Splide('.splide', {
    type: 'loop',
    pagination: false,
    focus: 'center',
    perPage: 3,
    width: '1440px',
    gap: '132px',
    fixedWidth: '650px',
    start: 1,

    breakpoints: {
      768: {
        width: '335px',
        fixedWidth: '335px',
        focus: 'center',
        perPage: 1,
        gap: 0,
        start: 0,

      },

      1440: {
        width: '500px',
        fixedWidth: '500px',
        focus: 'center',
        perPage: 1,
        gap: 0,
        start: 0,
      }
    }



    /*  breakpoints: {
       1440: {
         /* perPage: 3,
         start: 2,

         width: '650px',
         gap: 132,
         focus: 'center',

         start: 2,
         width: '400px',
         focus: 'center',
         perPage: 1,
         pagination: false,
         gap: 0,
       },
       768: {

         start: 1,
         width: '335px',
         focus: 'center',
         perPage: 1,
         pagination: false,

       },
     } */

  }).mount();









  //   new Glider(document.querySelector('.glider'), {
  //     slidesToScroll: 1,
  //     slidesToShow: 1,
  //     draggable: true,
  //     rewind: true,
  //     itemWidth: 335,

  //     arrows: {
  //       prev: '.glider-prev',
  //       next: '.glider-next'
  //     },
  //     responsive: [{
  //       // screens greater than >= 1440px
  //       breakpoint: 1440,
  //       settings: {
  //         // Set to `auto` and provide item width to adjust to viewport
  //         slidesToShow: '3',
  //         slidesToScroll: '1',
  //         itemWidth: 650,
  //         duration: 0.25
  //       }
  //     }]
  //   });
});
