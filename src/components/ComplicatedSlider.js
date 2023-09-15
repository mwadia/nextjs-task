'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ComplicatedSlideCard from './ComplicatedSlideCard';
import { Stack } from '@mui/material';

const ComplicatedSlider = ({ complicatedSliderContent }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '350px',
    slidesToShow: 1,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '250px',
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: '150px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <Stack maxWidth={'100vw'} overflow={'hidden'}>
      <Slider className='complicated-slider' {...settings}>
        {complicatedSliderContent.map((item, index) => (
          <ComplicatedSlideCard key={index} {...item} />
        ))}
      </Slider>
    </Stack>
  );
};

export default ComplicatedSlider;
