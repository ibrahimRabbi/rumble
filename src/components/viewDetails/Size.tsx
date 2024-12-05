'use client'

import { sizeHandler } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useState } from 'react';

const Size = ({ sizes }:{sizes:string[]}) => {

     
    const size = useAppSelector((state) => state.cart.size)
    const dispatch = useAppDispatch()
    
    const number = Math.random()
    const split = number.toString().split('.')[1]
    const id = parseInt(split)*689

    

    return (
        <div className='mt-5'>
            <p className='font-semibold text-[17px] text-zinc-700'>Available Sizes:</p>
            <div className='flex mt-1 flex-wrap gap-4'>
                {sizes?.map(v => {
                    return (
                        <div key={id} onClick={()=>dispatch(sizeHandler(v as any))} className={`${size === v ? 'bg-green-300 text-black font-normal' : 'text-zinc-600'} border cursor-pointer font-semibold py-2 px-4 text-[16px] rounded-lg`}>
                            {v}
                        </div>
                    )

                })}
            </div>
        </div>
    );
};

export default Size;