"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { category } from '@/utils/Tools';
import Link from 'next/link';
import CategoryCard from '@/components/category/CategoryCard';
import Title from '@/components/ui/Title';





const Category = () => {

    return (
        <section className='w-[90%] mx-auto lg:-mt-2 lg:pt-28 pt-16'>
            <Title title='Shope by Category' description='Find your prefernace Item via category' />

            <Swiper
                className='mt-5'
                freeMode={true}
                spaceBetween={30}
                slidesPerView={window.innerWidth > 470 ? 6 : 2}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
            >
                {
                    category.map((value,index) => {
                        return (
                            <SwiperSlide className='mt-3' key={index+1}>
                                <Link href={`products/category?value=${value?.name.toLowerCase()}`}> <CategoryCard image={value.image} name={value.name} /></Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>



        </section>
    );
};

export default Category;