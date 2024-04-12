import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import ad from '../../assets/promos/1.webp';
import ad2 from '../../assets/promos/2.webp';
import ad3 from '../../assets/promos/3.webp';
import ad4 from '../../assets/promos/4.webp';
import ad5 from '../../assets/promos/5.webp';
import ad6 from '../../assets/promos/6.webp';

export default function Promo() {
    return (
        <>
            <div style={{ marginTop: "100px" }} className='promo-container'>
                <h2 className="mb-[-70px] font-bold text-black text-2xl heading-text">Promo Codes for More Savings 😏</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={ad} alt="Promo 1" className='cursor-pointer' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ad2} alt="Promo 2" className='cursor-pointer' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ad3} alt="Promo 3" className='cursor-pointer' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ad4} alt="Promo 4" className='cursor-pointer' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ad5} alt="Promo 5" className='cursor-pointer' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ad6} alt="Promo 6" className='cursor-pointer' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
