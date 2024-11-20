import Banner from '@/components/banner/Banner';
import Category from '@/components/category/Category';
import HotDeal from '@/components/Deal/HotDeal';
import NewArrival from '@/components/newArrival/NewArrival';
import ShopIcon from '@/components/ShopIcons/ShopIcon';
import React from 'react';



const page = () => {
    return (
        <div>
            <Banner />
            <HotDeal />
            <Category />
            <NewArrival />
            <ShopIcon/>
        </div>
    );
};

export default page;