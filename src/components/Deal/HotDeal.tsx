'use client'

import React, { useRef } from 'react';
import Title from '../ui/Title';
import style from './deal.module.css'
import { FaRegEye } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {FreeMode,Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import nextBtn from '@/assets/icons/Right.png';
import back from '@/assets/icons/Back.png'

const HotDeal = () => {

    const description = 'here has a displayed offer and combo deal'
    const swiperRef = useRef<SwiperType>();


    return (
        <section className='mt-20 w-[97%] mx-auto'>
            <div className='w-[50%]'>
                <p className='text-2xl font-semibold'>Hot Deals</p>
                <p className='text-sm text-zinc-600'>{description}</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
                <button onClick={() => swiperRef.current?.slidePrev()}><Image width={100} src={back} alt='back' /></button>
                <Swiper
                    className='h-[430px] mt-6'
                    freeMode={true}
                    spaceBetween={30}
                    slidesPerView={4}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[FreeMode, Navigation]}>
 
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

                    <SwiperSlide>
                        <div className={`${style.bgImage4} flex flex-col rounded-md justify-between border items-end h-[320px]`}>
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
                </Swiper>


                <button onClick={() => swiperRef.current?.slideNext()}><Image width={100} src={nextBtn} alt='next' /></button>
            </div>
            
        </section>
    );
};

export default HotDeal;