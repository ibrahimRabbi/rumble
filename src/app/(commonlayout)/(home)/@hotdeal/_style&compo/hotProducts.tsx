'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import './hotDeal.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';



const HotProducts = ({ data }: { data: object[] }) => {

    const swiperRef = useRef<SwiperType>();
    const [browserWidth, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [browserWidth])


    return (
        <div>
            <div className='flex mt-5 justify-between gap-5 items-center'>
                <button className='hidden lg:block' onClick={() => swiperRef.current?.slidePrev()}>
                    <IoIosArrowBack className='size-10 text-gray-600 bg-gray-200 p-1 rounded-full' />
                </button>


                <Swiper
                    freeMode={true}
                    spaceBetween={60}
                    slidesPerView={browserWidth > 470 ? 4 : 1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[FreeMode, Navigation]}>

                    {
                        data?.map((v: any) => {
                            return (

                                <SwiperSlide key={v?._id}>
                                    <Link href={`/${v._id}`}>
                                        <div
                                            style={{ backgroundImage: `url(${v?.coverPhoto})`, height: '280px' }}
                                            className={`bg-center bg-no-repeat bg-cover flex flex-col rounded-md justify-between border items-end h-[300px]`}
                                        >
                                            <div className='p-2'>
                                                <p className="bg-purple-400 text-[20px] p-1 rounded-lg">{v?.offer}</p>
                                            </div>

                                            <div className={`glassmorphisom w-full py-4 px-2 flex justify-between items-center`}>
                                                <p className={`text-zinc-950 text-sm font-semibold`}>{v?.title?.slice(0, 15)}...</p>
                                                <div className='text-green-900 text-sm  font-bold flex items-center gap-1'><FaRegEye />View Item </div>
                                            </div>


                                        </div>
                                    </Link>
                                </SwiperSlide>


                            )
                        })
                    }
                </Swiper>


                <button className='hidden lg:block' onClick={() => swiperRef.current?.slideNext()}>
                    <IoIosArrowForward className='size-10 text-gray-600 bg-gray-200 p-1 rounded-full' />
                </button>
            </div>

            <div className='lg:hidden flex justify-center gap-14 mt-5 items-center'>
                <button onClick={() => swiperRef.current?.slidePrev()}>
                    <IoIosArrowBack className='size-10 text-gray-600 bg-gray-200 p-1 rounded-full' />
                </button>
                <button onClick={() => swiperRef.current?.slideNext()}>
                    <IoIosArrowForward className='size-10 text-gray-600 bg-gray-200 p-1 rounded-full' />
                </button>
            </div>
        </div>


    );
};

export default HotProducts;