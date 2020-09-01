import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.styles.scss';

const Carousel = ({ images }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerPadding: '0',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className='carousel slider-container'>
      <Slider {...settings}>
        {images.map((image) => (
          <div className='slide'>
            <div className='image-container'>
              <img src={image} alt='workshop' />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
