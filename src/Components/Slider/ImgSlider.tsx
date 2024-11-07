/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/sliderStyle.scss';

const data = [
  'Logo_Axway.png',
  'Logo_Socram_Banque.svg',
  'Logo_NicePng_zodiac.png',
  'Logo_Ocealia.png',
  'Logo_Safran.svg',
  'Logo_Sonepar.svg',
  'Logo_Airbus.svg',
];

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((imgName) => (
          <div className="img-slider-container">
            <img
              className="img-slider"
              key={imgName}
              src={imgName}
              alt={imgName}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default ImgSlider;
