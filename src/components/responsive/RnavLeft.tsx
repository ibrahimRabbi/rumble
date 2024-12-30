'use client'

import useCartData from '@/lib/cartData';
import { useGetUserQuery } from '@/redux/api/baseApi';
import Link from 'next/link';
import React from 'react';
import { RiCustomerService2Line } from 'react-icons/ri';

const RnavLeft = () => {

    const { totalQuantity } = useCartData()
    const {data:user} = useGetUserQuery({})


    return (
        <div className="lg:hidden flex justify-end items-center gap-5">
            <Link className="relative bg-gray-50  p-1 border rounded-md" href='/cart'>
                {
                    totalQuantity === 0 ? <p></p> : <span className="badge text-black bg-green-500 border-none text-center absolute -mt-[13px] ml-[13px]">{totalQuantity}</span>
                }
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </Link>
            <Link href={user?.success ? '/contact' : `/auth/sign-in?redirect=/contact`} className='bg-gray-50 border p-1 rounded-md'>
                <RiCustomerService2Line className="size-6 text-gray-500" />
            </Link>
            
        </div>
    );
};

export default RnavLeft;