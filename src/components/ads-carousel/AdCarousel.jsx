import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import ad from '../../assets/ads/ad1.webp'
import ad2 from '../../assets/ads/ad2.webp'
import ad3 from '../../assets/ads/ad3.webp'
import ad4 from '../../assets/ads/ad4.webp'
export default function AdCarousel() {
    return (
        <>
            <Swiper
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={ad} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ad2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ad3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ad4} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
