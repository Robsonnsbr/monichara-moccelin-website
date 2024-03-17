'use client';
import './style/swiperStyle.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { FaCircleUser } from 'react-icons/fa6';
import Stars from './Stars';

interface Testimonial {
  key: number;
  name: string;
  stars: number;
  testimonial: string;
}

interface SwiperContainerProps {
  testimonials: Testimonial[];
}

const SwiperContainer = ({ testimonials }: SwiperContainerProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const swiperParams: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 2300,
    breakpoints: {
      100: {
        slidesPerView: 1
      },
      668: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  };

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => setIsMouseOver(true)}
      data-aos="zoom-in-up"
    >
      <Swiper {...swiperParams} modules={[Navigation, Autoplay]}>
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.key}
            className="w-fit py-2 min-h-[450px]"
          >
            <div className="class-slide-box">
              <FaCircleUser className="size-24 text-lightApricotSalmon  drop-shadow-md" />
              <h3>{testimonial.name}</h3>
              <Stars stars={testimonial.stars} />
              <p>{testimonial.testimonial}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="transition-all ease-linear duration-200">
          <div
            className={`transition-all ease-linear duration-200 ${
              isMouseOver ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button className="swiper-button-next transition-all ease-linear duration-100" />
            <button className="swiper-button-prev transition-all ease-linear duration-100" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
