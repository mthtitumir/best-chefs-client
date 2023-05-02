import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import chinese from '../../../assets/food-cat/chinese-food.jpeg';
import japanese from '../../../assets/food-cat/japanese-food.webp';
import indian from '../../../assets/food-cat/indian-food.webp';
import italian from '../../../assets/food-cat/italian-food.jpeg';
import maxican from '../../../assets/food-cat/maxican-food.jpeg';

const FoodCategories = () => {
    const { images, setImages } = useState([]);
    useEffect(() => {
        fetch('')
    }, [])
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={chinese} alt="" />
                    Slide 1
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={japanese} alt="" />
                    Slide 2
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={indian} alt="" />
                    Slide 3
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={maxican} alt="" />
                    Slide 4
                </SwiperSlide>
                <SwiperSlide className='h-100'>
                    <img className='w-full h-full object-cover' src={italian} alt="" />
                    Slide 5
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCategories;