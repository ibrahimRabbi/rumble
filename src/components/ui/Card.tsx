'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Card = ({ data }: { data: any }) => {
    
    const {_id, coverPhoto, title, price } = data
    const [browserWidth, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [browserWidth])

    return (
        <Link href={`/${_id}`} key={_id} className='border rounded-md'>

            <div className='avatar'>
                <div className='w-full'>
                    <Image priority={true} className='h-[330px] hover:scale-105 duration-150' width={500} height={600} src={coverPhoto} alt='product image' />
                </div>
            </div>
           

            <div className='px-2 flex justify-between items-center'>
                <div>
                    <p className='text-sm'>{browserWidth > 470 ? title?.slice(0, 16) : title?.slice(0, 13) }<span className='font-bold'>....</span></p>
                    <p className='text-[18px] text-zinc-700 font-semibold'>{price} Tk</p>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default Card;