'use client'
import { colorHandler } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';



const Color = ({ colors }:{colors:string[]}) => {

    
    const color = useAppSelector((state: RootState) => state.cart.color)
    const dispatch = useAppDispatch()
    



    return (
        <div className='mt-6'>
            <p className='font-semibold text-[17px] text-zinc-700'>Available Color : </p>
            <div className='flex items-center gap-4'>
                {
                   colors?.map((colorValue,index) => <div
                        key={index+1}
                       className={`${color === colorValue ? 'bg-green-300 text-black font-normal' : 'text-zinc-600'} rounded-md font-semibold text-sm border p-3 cursor-pointer`}
                        onClick={()=>dispatch(colorHandler(colorValue as any))}
                   >{colorValue}</div>)
                 }
            </div>
        </div>
        
    );
};

export default Color;