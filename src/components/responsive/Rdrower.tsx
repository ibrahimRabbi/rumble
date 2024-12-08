import { BannerCategoryData } from '@/utils/Tools';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Rdrower = () => {
    return (
        
            <div className="drawer lg:drawer-open z-50">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-10">


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className='w-[300px] space-y-1 bg-slate-50 min-h-screen pt-3 rounded-lg text-zinc-950 text-[17px] lg:z-50 absolute'>
                        {
                            BannerCategoryData.map((v,index) => {
                                return (
                                    <Link key={index+1} href={{ pathname: `/products/category/`, query: { value: v.name.toLowerCase().toString() } }}>
                                        <li className='bg-slate-50 hover:bg-green-100 flex justify-start items-center gap-2 p-2'>
                                            <Image src={v.icon} alt='icons' width={30} />
                                            <p>{v.name}</p>
                                        </li>
                                        <hr className='mt-1' />
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        
        
    );
};

export default Rdrower;