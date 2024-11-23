import { BannerCategoryData } from '@/utils/Tools';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const BannerCategory = () => {



    return (
        <div>
            <ul className='w-[300px] space-y-1 bg-slate-50 rounded-lg text-zinc-950 text-[17px] lg:z-50 absolute'>
                {
                    BannerCategoryData.map(v => {
                        return (
                            <Link key={Math.random()} href={{ pathname: `/category/` ,query:{name:v.name.toLowerCase().toString()}}}>
                                <li className='bg-slate-50 hover:bg-green-100 flex justify-start items-center gap-2 p-2' key={Math.random()}>
                                    <Image src={v.icon} alt='icons' width={30}/>
                                    <p>{v.name}</p>
                                </li>
                                <hr className='mt-1' />
                           </Link>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default BannerCategory;

// lg: absolute