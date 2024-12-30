'use client'
import { colorHandler } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';



const Color = ({ colors }:{colors:string[]}) => {

    
    const color = useAppSelector((state: RootState) => state.cart.color)
    const dispatch = useAppDispatch()
    



    return (
        <div className='mt-12'>
            <p className='text-sm text-zinc-800'>Select Color : </p>
            <div className='flex items-center gap-4'>
                {
                   colors?.map((colorValue,index) => <div
                        key={index+1}
                       className={`${color === colorValue ? 'bg-zinc-900 text-white font-normal' : 'text-zinc-800'} px-4 py-1 border border-zinc-500 cursor-pointer text-sm`}
                        onClick={()=>dispatch(colorHandler(colorValue as any))}
                   >{colorValue}</div>)
                 }
            </div>
        </div>
        
    );
};

export default Color;