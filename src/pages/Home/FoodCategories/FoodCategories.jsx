import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import chinese from '../../../assets/food-cat/chinese-food.jpeg';
import japanese from '../../../assets/food-cat/japanese-food.webp';
import indian from '../../../assets/food-cat/indian-food.webp';
import italian from '../../../assets/food-cat/italian-food.jpeg';
import maxican from '../../../assets/food-cat/maxican-food.jpeg';

const FoodCategories = () => {
    // const { images, setImages } = useState([]);
    // useEffect(() => {
    //     fetch('')
    // }, [])
    return (
        <div className='container mx-auto rounded-xl'>
            <h1 className='text-center text-5xl font-semibold my-10'>Food Categories</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={chinese} alt="" />
                    <h1 className='text-3xl font-semibold my-3 py-3 rounded border text-center'>Chinese</h1>
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={japanese} alt="" />
                    <h1 className='text-3xl font-semibold my-3 py-3 rounded border text-center'>Japanese</h1>
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={indian} alt="" />
                    <h1 className='text-3xl font-semibold my-3 py-3 rounded border text-center'>Indian</h1>
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={maxican} alt="" />
                    <h1 className='text-3xl font-semibold my-3 py-3 rounded border text-center'>Maxican</h1>
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={italian} alt="" />
                    <h1 className='text-3xl font-semibold my-3 py-3 rounded border text-center'>italian</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCategories;