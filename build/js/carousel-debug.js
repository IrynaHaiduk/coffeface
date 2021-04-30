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
});
