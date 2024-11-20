"use client"

import React from 'react';
import Title from '../ui/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import CategoryCard from './CategoryCard';
import { category } from '@/utils/Tools';





const Category = () => {

    return (
        <section className='w-[90%] mx-auto -mt-2'>
            <Title title='Shope by Category' description='Find your prefernace Item via category' />

            <Swiper
                className='mt-5'
                freeMode={true}
                spaceBetween={30}
                slidesPerView={6}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
            >
                {
                    category.map((value) => {
                        return (
                            <SwiperSlide className='mt-3' key={Math.random()}>
                                <CategoryCard image={value.image} name={value.name} />
                            </SwiperSlide>
                        )
                    })
                }      
            </Swiper>



        </section>
    );
};

export default Category;