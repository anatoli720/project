import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../index.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Promotions() {

    return (<div className="pb-8">
        <h1 className="promotions-block">Акции дня</h1>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="flex h-32">
                    <img className="image-promotion" src="https://backend.dominos.by/media/dominos/discount_campaign/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80_%D0%BA%D0%BE%D0%BC%D0%B1%D0%BE_5_%D0%BF%D0%B8%D1%86%D1%86_9pq5gX1.png"></img>
                    <div className="flex-col text-promotions">
                        <h5 className="title-promotion text-promotions">5 ПИЦЦ ПО ЦЕНЕ 75,99</h5>
                        <p className="content-promotion">В любой день недели заказывайте 5 пицц среднего размера из представленного ассортимента пицц на классике/ тонком тесте со скидкой до 66 руб. по СУПЕРЦЕНЕ - 75,99! </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex h-32">
                    <img className="image-promotion" src="https://backend.dominos.by/media/dominos/discount_campaign/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80_%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BC%D0%B1%D0%BE_2_58UJMwI.png"></img>
                    <div className="flex-col text-promotions">
                        <h5 className="title-promotion">KIDS КОМБО!</h5>
                        <p className="content-promotion">Заказывайте на самовывоз пиццу Карбонара или Чеддерони среднего размера и сок Rich 0,3л. или Бонаква 0,5л на выбор за 17.99 руб! </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex h-32">
                    <img className="image-promotion" src="https://backend.dominos.by/media/dominos/discount_campaign/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80_%D0%BA%D0%BE%D0%BC%D0%B1%D0%BE_7_%D0%BF%D0%B8%D1%86%D1%86_yAM4zCO.png"></img>
                    <div className="flex-col text-promotions">
                        <h5 className="title-promotion">7 ПИЦЦ ПО ЦЕНЕ 99,99</h5>
                        <p className="content-promotion">В любой день недели заказывайте 7 пицц среднего размера из представленного ассортимента пицц на классике/ тонком тесте со скидкой до 99 руб. по СУПЕРЦЕНЕ - 99,99! </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex h-32">
                    <img className="image-promotion" src="https://backend.dominos.by/media/dominos/discount_campaign/%D0%9A%D0%90_21_312%D1%85312_4nODlBo.png"></img>
                    <div className="flex-col text-promotions">
                        <h5 className="title-promotion">АРИФМЕТИКА от Domino's Pizza: 2+1</h5>
                        <p className="content-promotion">С понедельника по четверг купите 2 большие пиццы и получите маленькую всего за 0,01 р.!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex h-32">
                    <img className="image-promotion" src="https://backend.dominos.by/media/dominos/discount_campaign/Lucky_kombo_%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80.jpg"></img>
                    <div className="flex-col text-promotions">
                        <h5 className="title-promotion">LUCKY COMBO</h5>
                        <p className="content-promotion">Заказывайте на самовывоз/доставку 2 пиццы среднего размера из категорий «Классические» и «Любимые» + Картофель Фри из печи и платите фиксированную стоимость 39.99 руб.</p>
                    </div>
                </div>
            </SwiperSlide>
            

        </Swiper>
    </div>

    )
}