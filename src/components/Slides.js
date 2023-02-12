import React, {useRef, useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../index.css";

export default function Slides(){

    return ( <div className="slides-block">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.dominos.by/media/dominos/sliders/ru/big/2023/01/30/%D0%9C%D0%BE%D1%80%D0%BE%D0%B6%D0%B5%D0%BD%D0%BE%D0%B5_1320%D1%85400-2.jpg" ></img></SwiperSlide>
        <SwiperSlide><img src="https://images.dominos.by/media/dominos/sliders/ru/big/2022/03/23/%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%A8%D0%9C%D0%9F_1320%D1%85400-min.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images.dominos.by/media/dominos/sliders/ru/big/2023/01/30/Lucky_kombo_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF-2.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://images.dominos.by/media/dominos/sliders/ru/big/2022/08/08/%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0_%D0%B2_%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_1320%D1%85400.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images.dominos.by/media/dominos/sliders/ru/big/2022/05/27/%D1%82%D0%B8%D0%B7%D0%B5%D1%80_5-10_%D0%BF%D0%B8%D1%86%D1%86_%D0%B4%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%BF-min.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images.dominos.by/media/dominos/sliders/ru/big/2023/01/30/veggy_05-22_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-2.jpg"></img></SwiperSlide>
      </Swiper>
    </div>
        
    )
}