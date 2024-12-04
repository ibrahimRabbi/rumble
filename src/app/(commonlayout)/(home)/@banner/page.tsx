'use client'

import { Suspense } from 'react';
import BannerSlider from './_style&compo/Banner';
import style from './_style&compo/banner.module.css'
import BannerCategory from '@/components/category/BannerCategory';



const Banner = () => {
    return (
        <section className={`w-[90%] lg:h-[465px] h-[170px] ml-7 lg:mx-auto mt-7 flex lg:grid ${style.banner} gap-10`}>
            <BannerCategory />
            <BannerSlider />
        </section>



    );
};

export default Banner



