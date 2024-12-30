'use client'
import { sizeHandler } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';


const Size = ({ sizes }:{sizes:string[]}) => {

     
    const size = useAppSelector((state) => state.cart.size)
    const dispatch = useAppDispatch()
    
    
    return (
        <div className='mt-12'>
            <p className='text-sm text-zinc-800'>Select Size:</p>
            <div className='flex mt-1  flex-wrap gap-4'>
                {sizes?.map((v,index) => {
                    return (
                        <p key={index + 1} onClick={() => dispatch(sizeHandler(v as any))} className={`${size === v ? 'bg-zinc-900 text-white font-normal' : 'text-zinc-800'} px-5 py-1 border border-zinc-500 cursor-pointer text-[14px]`}>
                            {v}
                        </p>
                    )

                })}
            </div>
        </div>
    );
};

export default Size;