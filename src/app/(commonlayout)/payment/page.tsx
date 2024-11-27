'use client'
import COD from '@/assets/payment/cash-on-delivery-removebg-preview.png'
import bekash from '@/assets/payment/bekash.png'
import nagad from '@/assets/payment/nagad-removebg-preview.png'
import bank from '@/assets/payment/atm-card-removebg-preview.png'
import Link from 'next/link';
import Image from 'next/image';
import cartData from '@/lib/cartData';
import { useState } from 'react'

 

const page = () => {
    // { searchParams }: { searchParams: any }
    // const { address, district, phone, name } = searchParams
    const { subTotal, totalQuantity } = cartData()
    const [isDisabled,setDisabled] = useState(true)
    
    
     

    return (
        <div className='lg:w-[90%] w-[95%] mx-auto min-h-screen lg:mt-8 mt-4'>
            <p className='text-[22px] font-semibold text-[#493115]'>Choose Payment Method</p>

            <div className='flex mt-3 lg:flex-row flex-col-reverse justify-between items-start'>


                <div className='mb-8 lg:mt-0 mt-5 flex flex-wrap lg:justify-start justify-center items-center gap-6 lg:gap-14 lg:w-[60%] w-full'>

                    <Link className='border p-4 text-center space-y-2' href='/success'>
                        <Image src={COD} alt='COD' width={115} />
                        <p className='font-semibold text-zinc-700'>Cash on Delivary</p>
                    </Link>

                    <Link className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} border p-4 text-center space-y-2 `}
                        href={isDisabled? '#': '/successfull'}>
                        <Image src={bekash} alt='bekash' width={115} />
                        <p className='font-semibold text-zinc-700'>Bakash</p>
                    </Link>
                    <Link className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} border p-4 text-center space-y-2 `} href={isDisabled ? '#' : '/successfull'}>
                        <Image src={nagad} alt='nagad' width={124} />
                        <p className='font-semibold text-zinc-700'>Nagad</p>
                    </Link>
                    <Link className={`${isDisabled ? 'opacity-50 cursor-not-allowed':''} border p-4 text-center space-y-2 `} href={isDisabled ? '#' : '/successfull'}>
                        <Image src={bank} alt='bank' width={115} />
                        <p className='font-semibold text-zinc-700'>Dedit/credit card</p>
                    </Link>
                </div>

                

                <div className='bg-slate-100 p-4 lg:w-[34%] w-full'>
                    <p className='text-xl font-semibold text-zinc-900'>Shopping Summery</p>
                    <div className='flex justify-between gap-2 items-center mt-5'>
                        <p className='text-gray-500'>Subtotal ( {totalQuantity} items and shipping fee included)</p>
                        <p>{subTotal}-Tk</p>
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-lg text-zinc-800'>Payable Amount :</p>
                        <p className='text-2xl text-green-950 font-semibold'>{subTotal + 10}-Tk</p>
                    </div>
                </div>
            </div>
            

            <p><span className='text-lg font-semibold'>Note : </span> ৳10 taka extra charage applicable for cash on delivary</p>
            
            

        </div>
    );
};

export default page;