'use client'
import { dicrement, increment } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useState } from 'react';


const Increment = () => {

    const quantity = useAppSelector(state => state.cart.quantity)
    const dispatch = useAppDispatch()

    return (
        <div>
            <p className='font-semibold text-[17px] text-zinc-700'>Quantity:</p>
            <div className='flex justify-between border border-[#e2ac8a] items-center px-2 w-32 bg-white gap-5 rounded-md'>
                <button onClick={()=>dispatch(dicrement())} className='p-2 text-lg font-bold'>-</button>
                <p className='px-1'>{quantity}</p>
                <button onClick={()=>dispatch(increment())} className='p-2 text-lg font-bold' >+</button>
            </div>
        </div>
    );
};

export default Increment;