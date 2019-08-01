import slick from 'slick-carousel';
import { WIN } from './../constants';

const slider = $('.js-services-slider');
slider.slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slideToScroll: 1,
  autoplay: false
});


const simpleslider = $('.js-simpleslider');
simpleslider.each((i,el) => {
  $(el).slick({
	  dots: false,
	  arrows: true,
	  infinite: false,
	  speed: 400,
	  slidesToShow: $(el).data('slideshow') || 4,
	  slideToScroll: 1,
	  autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
    ]
  });

});
