'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Pagination,Autoplay} from 'swiper/modules';
import banner1 from '@/assets/banner/winter1.jpeg'
import banner2 from '@/assets/banner/winter2.jpg'
import banner3 from '@/assets/banner/winter3.png'
import Image from 'next/image';
import Link from 'next/link';
import BannerCategory from '../category/BannerCategory';
import style from './banner.module.css'
import { CSSProperties } from 'react';

 const Banner = () => {
    return (
        <section className={`lg:w-[90%] w-[90%] lg:h-[465px] h-[170px] ml-7 lg:mx-auto mt-7 flex lg:grid ${style.banner}`}>
            <BannerCategory/>
            <Swiper
               className='w-full h-full'
                effect={'fade'}
                spaceBetween={30}
                slidesPerView={1}
                pagination={true}
                centeredSlides={true}
                
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                style={{
                    "--swiper-pagination-color": "#0e8726",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                } as CSSProperties}
            >
                <SwiperSlide>
                    <Link href='/'><Image src={banner1} alt='banner-1' /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href='/'><Image src={banner3} alt='banner-2' /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'><Image src={banner2} alt='banner-2' /></Link>
                </SwiperSlide>
            </Swiper>
       </section>
            
           
        
    );
};

export default Banner