'use client'
import { dicrement, increment } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';



const Increment = () => {

    const quantity = useAppSelector(state => state.cart.quantity)
    const dispatch = useAppDispatch()

    return (
        <div>
            <p className='text-sm text-zinc-800'>Quantity:</p>
            <div className='flex mt-1 justify-between border border-[#747373] items-center px-2 py-1 w-32 bg-white gap-5 '>
                <button onClick={()=>dispatch(dicrement())} className=' text-lg font-bold'>-</button>
                <p className='px-1'>{quantity}</p>
                <button onClick={()=>dispatch(increment())} className=' text-lg font-bold' >+</button>
            </div>
        </div>
    );
};

export default Increment;