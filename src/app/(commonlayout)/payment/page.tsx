'use client'
import COD from '@/assets/payment/cash-on-delivery-removebg-preview.png'
import bekash from '@/assets/payment/bekash.png'
import nagad from '@/assets/payment/nagad-removebg-preview.png'
import bank from '@/assets/payment/atm-card-removebg-preview.png'
import Link from 'next/link';
import Image from 'next/image';
import cartData from '@/lib/cartData';
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCreateOrderMutation, useGetUserQuery } from '@/redux/api/baseApi'
import toast from 'react-hot-toast'



const page = () => {

    const [isDisabled, setDisabled] = useState(true)
    const { subTotal, totalQuantity, data } = cartData()
    const { data: user } = useGetUserQuery({})
    const [createOrder, { }] = useCreateOrderMutation()
    const router = useRouter()

    const query = useSearchParams()
    const name = query.get('name')
    const number = query.get('phone')
    const address = query.get('address')
    const district = query.get('district')

    const orderData = {
        email: user?.response?.email,
        items: data?.response,
        totalQuantity,
        deliverDetails: { name, number, address, district },
        amount: subTotal
    }



    const successHandler = async () => {
        const creating = await createOrder(orderData).unwrap()
        console.log(creating)
        if (creating?.response.length > 1) {
            toast.success('order successfull!')
            router.push('/success')
        } else {
            toast.error('something went wrong please try again')
        }
    }

    return (
        <div className='lg:w-[90%] w-[95%] mx-auto min-h-screen lg:mt-8 mt-4'>
            <p className='text-[1.190rem] font-semibold text-[#493115]'>Choose payment method</p>

            <div className='flex mt-3 lg:flex-row flex-col-reverse justify-between items-start'>


                <div className='mb-8 lg:mt-0 mt-5 flex flex-wrap lg:justify-start justify-center items-center gap-6 lg:gap-10 lg:w-[65%] w-full'>

                    <button onClick={successHandler} className='border shadow-md p-4 text-center space-y-2' >
                        <Image src={COD} alt='COD' width={107} />
                        <p className='font-semibold text-zinc-700'>Cash on Delivary</p>
                    </button>

                    <Link className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} border p-4 text-center space-y-2 shadow-md `}
                        href={isDisabled ? '#' : '/successfull'}>
                        <Image src={bekash} alt='bekash' width={115} />
                        <p className='font-semibold text-zinc-700'>Bakash</p>
                    </Link>
                    <Link className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} border p-4 text-center space-y-2 shadow-md `} href={isDisabled ? '#' : '/successfull'}>
                        <Image src={nagad} alt='nagad' width={111} />
                        <p className='font-semibold text-zinc-700'>Nagad</p>
                    </Link>
                    <Link className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} border p-4 text-center space-y-2 shadow-md `} href={isDisabled ? '#' : '/successfull'}>
                        <Image src={bank} alt='bank' width={100} />
                        <p className='font-semibold text-zinc-700'>Dedit/credit card</p>
                    </Link>
                </div>



                <div className='bg-slate-100 p-4 lg:w-[35%] w-full'>
                    <p className='text-xl font-semibold text-zinc-900'>Shopping Summery</p>
                    <div className='flex justify-between gap-2 items-center mt-5'>
                        <p className='text-gray-500 text-sm'>Subtotal ( {totalQuantity} items and shipping fee included)</p>
                        <p>{subTotal}-Tk</p>
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-lg text-zinc-800'>Payable Amount :</p>
                        <p className='text-xl text-green-950 font-semibold'>{subTotal + 10}-Tk</p>
                    </div>
                </div>
            </div>


            <p><span className='text-lg font-semibold'>Note : </span> ৳10 taka extra charage applicable for cash on delivary</p>



        </div>
    );
};

export default page;