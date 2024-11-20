'use client'

import React from 'react';
import Title from '../ui/Title';
import style from './deal.module.css'
import { FaRegEye } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';


const HotDeal = () => {

    const description = 'here has a displayed offer and combo deal'



    return (
        <section className='mt-20 w-[90%] mx-auto'>
            <Title title='Hot Deals' description={description} />
            <Swiper
                className='h-[430px] mt-6'
                freeMode={true}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}>

                <SwiperSlide>
                    <div className={`${style.bgImage1} flex flex-col rounded-md justify-between border items-end h-[320px]`}>
                        <p className='p-2'><span className='text-3xl text-sky-600'>20%</span> off</p>
                        <div className={`${style.glassmorphisom} w-full py-4 px-2 flex justify-between items-center`}>
                            <p className='text-zinc-900 font-semibold text-sm'>Nike Air jordan 2</p>
                            <Link className='text-zinc-900 font-bold flex items-center gap-1' href='/'><FaRegEye />View cart</Link>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${style.bgImage2} flex flex-col rounded-md justify-between border items-end h-[320px]`}>
                        <p className='p-2'><span className='text-3xl text-sky-600'>20%</span> off</p>
                        <div className={`${style.glassmorphisom} w-full py-4 px-2 flex justify-between items-center`}>
                            <p className='text-zinc-900 font-semibold text-sm'>Nike Air jordan 2</p>
                            <Link className='text-zinc-900 font-bold flex items-center gap-1' href='/'><FaRegEye />View cart</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${style.bgImage3} flex flex-col rounded-md justify-between border items-end h-[320px]`}>
                        <p className='p-2'><span className='text-3xl text-sky-600'>20%</span> off</p>
                        <div className={`${style.glassmorphisom} w-full py-4 px-2 flex justify-between items-center`}>
                            <p className='text-zinc-900 font-semibold text-sm'>Nike Air jordan 2</p>
                            <Link className='text-zinc-900 font-bold flex items-center gap-1' href='/'><FaRegEye />View cart</Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${style.bgImage4} flex flex-col rounded-md justify-between border items-end h-[320px]`}>
                        <p className='p-2'><span className='text-3xl text-sky-600'>20%</span> off</p>
                        <div className={`${style.glassmorphisom} w-full py-4 px-2 flex justify-between items-center`}>
                            <p className='text-zinc-900 font-semibold text-sm'>Nike Air jordan 2</p>
                            <Link className='text-zinc-900 font-bold flex items-center gap-1' href='/'><FaRegEye />View cart</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
             
        </section>
    );
};

export default HotDeal;