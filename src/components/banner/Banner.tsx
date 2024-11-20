'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation,Autoplay} from 'swiper/modules';
import banner1 from '@/assets/banner/winter1.jpeg'
import banner2 from '@/assets/banner/winter2.jpg'
import banner3 from '@/assets/banner/winter3.png'
import Image from 'next/image';
import Link from 'next/link';

 const Banner = () => {
    return (
       
            <Swiper
                className='h-[430px]'
                effect={'fade'}
                navigation={true}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Navigation,]}>
                <SwiperSlide>
                    <Link href='/'><Image height={500} src={banner1} alt='banner-1' /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href='/'><Image height={500} src={banner3} alt='banner-2' /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'><Image height={500} src={banner2} alt='banner-2' /></Link>
                </SwiperSlide>
            </Swiper>
           
        
    );
};

export default Banner