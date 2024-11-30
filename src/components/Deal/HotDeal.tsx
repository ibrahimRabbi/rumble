'use client'
import { useRef } from 'react';
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
import { useGetHotProductQuery } from '@/redux/api/baseApi';
import './hotDeal.css'




const HotDeal = () => {

    const description = 'here has a displayed offer and combo deal'
    const swiperRef = useRef<SwiperType>();
    const { data } = useGetHotProductQuery({})

     

    return (
        <section className='lg:mt-16 mt-6 lg:w-[97%] w-[90%] mx-auto'>
            <div className='lg:w-[50%] lg:ml-12'>
                <p className='text-2xl font-semibold'>Hot Deals</p>
                <p className='text-sm text-zinc-600'>{description}</p>
            </div>
            <div className='flex mt-5 justify-between gap-5 items-center'>
                <button className='hidden lg:block' onClick={() => swiperRef.current?.slidePrev()}>
                    <Image width={130} src={back} alt='back' />
                </button>
                <Swiper
                    freeMode={true}
                    spaceBetween={60}
                    slidesPerView={window?.innerWidth > 470 ? 4 : 1 }
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[FreeMode, Navigation]}>
 
                    {
                        data?.response?.map((v: any) => {
                            return (
                                <SwiperSlide key={v?._id}>
                                    <Link href={`/${v._id}`}>
                                        <div
                                            style={{ backgroundImage: `url(${v?.coverPhoto})`, height: '280px' }}
                                            className={`bgImage flex flex-col rounded-md justify-between border items-end h-[300px]`}
                                        >
                                            <p className='p-2'>
                                                <div className="bg-purple-400 text-[20px] p-1 rounded-lg">{v?.offer}</div>
                                            </p>
                                            <div className={`glassmorphisom w-full py-4 px-2 flex justify-between items-center`}>
                                                <p className={`text-zinc-950 text-sm font-semibold`}>{v?.title?.slice(0, 15)}...</p>
                                                <Link className='text-green-900 text-sm  font-bold flex items-center gap-1' href='/'><FaRegEye />View Item </Link>
                                            </div>
                                        </div>
                                    </Link>

                                </SwiperSlide>
                            )
                        })
                    }     
                </Swiper>


                <button className='hidden lg:block' onClick={() => swiperRef.current?.slideNext()}><Image width={130} src={nextBtn} alt='next' /></button>
            </div>

            <div className='lg:hidden flex justify-center gap-10 mt-2 items-center'>
                <button onClick={() => swiperRef.current?.slidePrev()}><Image width={70} src={back} alt='back' /></button>
                <button onClick={() => swiperRef.current?.slideNext()}><Image width={70} src={nextBtn} alt='next' /></button>
            </div>
        </section>
    );
};

export default HotDeal;