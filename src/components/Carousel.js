// src/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ADEX from "../assets/asociados-aliados/ADEX.png";
import ASEP from "../assets/asociados-aliados/ASEP.png";
import CCL from "../assets/asociados-aliados/CCL.png";
import FINTECHPERU from "../assets/asociados-aliados/FINTECHPERU.png";
import MIXX from "../assets/asociados-aliados/iabMIXX.png";
import ISO from "../assets/asociados-aliados/ISO.png";
import MINISTERIO from "../assets/asociados-aliados/MINISTERIO2.jpg";
import SCALEUP from "../assets/asociados-aliados/SCALEUP.png";
import SEEDS from "../assets/asociados-aliados/SEEDSTARSWORLD.png";
import SNI from "../assets/asociados-aliados/SNI.png";
import STARTUP from "../assets/asociados-aliados/STARTUP.png";
import VISA from "../assets/asociados-aliados/VISA.png";


const Carousel = () => {
  const slides = [
    { text: 'Somos asociados', isText: true },
    { image: ADEX }, 
    { image: ASEP },
    { image: CCL },
    { image: FINTECHPERU },
    { image: SCALEUP },
    { image: SNI },
    { text: 'Somos ganadores', isText: true },
    { image: MIXX },
    { image: VISA},
    { image: SEEDS},
    { image: MINISTERIO},
    { image: STARTUP },
    { image: ISO},
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    adaptiveHeight: true,
    initialSlide: 0,
    cssEase: 'linear',
    easing: 'linear',
    centerMode: true,  
    variableWidth: false,
    focusOnSelect: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    beforeChange: (current, next) => console.log(`Before change, current slide is: ${current}, next slide is: ${next}`),
    afterChange: current => console.log(`After change, current slide is: ${current}`),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='bg-carousel-100 h-20'>
          {slide.isText ? (
            <div className="py-4 px-4">
              <p className="text-white mt-2 font-poppins text-lg mx-auto font-bold">{slide.text}</p>
            </div>
          ) : (
            <div className="py-4 px-5">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="mx-8" />
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
