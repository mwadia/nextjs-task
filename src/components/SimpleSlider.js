'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import SimpleSlideCard from './SimpleSlideCard';
import { dir } from 'i18next';

const SimpleSlider = ({ simpleSliderContent, lang }) => {
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
      <Image
        src='/images/Vector.png'
        width={30}
        height={30}
        alt=''
        style={{ transform: dir(lang) !== 'rtl' ? 'scaleX(-1)' : 'none' }} // تعكيس الاتجاه إذا كانت اللغة عربية
      />
    </div>
  );

  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
      <Image
        style={{ transform: dir(lang) === 'rtl' ? 'scaleX(-1)' : 'none' }} // تعكيس الاتجاه إذا كانت اللغة عربية
        src='/images/Vector.png'
        width={30}
        height={30}
        alt=''
      />
    </div>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider className={`categories-slider` + ' ' + dir(lang)} {...settings}>
      {simpleSliderContent.map((item, index) => (
        <SimpleSlideCard key={index} {...item} />
      ))}
    </Slider>
  );
};

export default SimpleSlider;
