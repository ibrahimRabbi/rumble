'use client'
import AddDetailsDialog from '@/components/addDetailsDialog/AddDetailsDialog';
import ShippingSummery from '@/components/Summery/ShippingSummery';
import { Button } from '@/components/ui/button';
import { useDeleteAddressMutation, useGetUserQuery } from '@/redux/api/baseApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdAdd } from "react-icons/io";
import bekash from '@/assets/payment/bekash.png'
import nagad from '@/assets/payment/nagad-removebg-preview.png'
import masterCard from '@/assets/payment/masterCard.png'
import visaCard from '@/assets/payment/visa-removebg-preview.png'
import { useAppDispatch } from '@/redux/hook';
import { changeDelivaryChrg } from '@/redux/features/shippingSlice';
import { Checkbox } from '@/components/ui/checkbox';
import RprocedToPay from '@/components/responsive/RprocedToPay';





export type DeliverAddress = {
    name: string,
    phone: string,
    address: string,
    district: string,
    isSelect: boolean
}


const page = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [details, setDetails] = useState({})
    const { data: user, isLoading } = useGetUserQuery({})
    const [deleteaddress, { }] = useDeleteAddressMutation()
    const dispatch = useAppDispatch()




    const pickDetails = (details: DeliverAddress) => {
        setDetails(details)

        if (details.district.toLowerCase() !== 'dhaka') {
            dispatch(changeDelivaryChrg(120))
        } else {
            dispatch(changeDelivaryChrg(70))
        }
    }


    const deleteHandler = async (value: DeliverAddress) => {
        const response = await deleteaddress(value).unwrap()
        if (response?.success) {
            toast.success('deleted successfully')
        }
    }





    // if (isLoading) {
    //     return <h1 className='text-2xl flex justify-center mt-10'>Loading...</h1>
    // }


    return (
        <section className='lg:w-[90%] mx-auto lg:my-8'>
            {/* responsive */}
            <RprocedToPay shippingDetails={details as DeliverAddress} />

            <p className='text-[#493115] text-lg lg:mt-0 mt-8 font-semibold lg:text-start text-center'>Choose a shipping Address & Details</p>

            <div className='flex justify-between items-start mt-4'>
                <div className='lg:w-[68%] w-full'>

                    <div className='lg:w-full w-[95%] mx-auto lg:border lg:p-5 rounded-md'>

                        <div className='hidden lg:block'>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg font-semibold'>Your Details</p>
                                <Link href='/' className='text-sky-700 font-semibold block'>Shipping to more than one address?</Link>
                            </div>
                            <hr className='mt-1' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            {
                                user?.response?.deliverAddress?.map((v: DeliverAddress) => {
                                    return (
                                        window.innerWidth > 470 ?
                                            <div key={Math.random()} className='flex items-center justify-between rounded-md bg-green-50 mt-3 p-3'>
                                                <div className='flex items-center gap-2'>
                                                    <Checkbox onCheckedChange={() => pickDetails(v)} />

                                                    <p className='font-semibold'>{v?.name}</p>
                                                    <p className=''>{v?.phone}</p>

                                                    <p className='lg:pl-4'>{v?.address}, <span>{v?.district}</span></p>
                                                </div>
                                                <button onClick={() => deleteHandler(v)} className='text-sky-600 underline'>Delete</button>
                                            </div> :
                                            <div key={Math.random()} className='min-w-full flex justify-between gap-2 items-center p-2 bg-green-100 bordre rounded-md'>
                                                <Checkbox onCheckedChange={() => pickDetails(v)} />
                                                <div className='flex w-full gap-2 items-center'>
                                                    <div className='flex w-full gap-2 items-center'>
                                                        <p className='text-nowrap'>{v?.name}</p>
                                                        <span>{v?.phone}</span>
                                                        <span>{v.address}, {v.district}</span>  
                                                    </div>
                                                    <button onClick={() => deleteHandler(v)} className='text-sky-600 underline '>Delete</button>
                                                </div>
                                            </div>

                                    )
                                })
                            }
                        </div>

                        <button onClick={() => setIsOpen(true)} className='flex gap-1 mt-7 items-center'>
                            <IoMdAdd className='text-xl' />
                            <p className='text-sky-600 text-[17px]'>Add New Details</p>
                        </button>
                        <AddDetailsDialog isOpen={isOpen} setIsOpen={setIsOpen} />


                    </div>


                    <div className='flex justify-center items-center gap-2 my-10'>
                        <p className='font-semibold text-zinc-700'>We Are Accept :</p>
                        <div className='flex justify-center gap-5 items-center'>
                            <Image width={30} src={bekash} alt='bekash' />
                            <Image width={36} src={nagad} alt='nagad' />
                            <Image width={30} src={masterCard} alt='master card' />
                            <Image width={34} src={visaCard} alt='visa card' />
                        </div>
                    </div>

                </div>


                <div className='hidden lg:block lg:w-[28%] border'>
                    <ShippingSummery shippingDetails={details as DeliverAddress} />
                </div>
            </div>
        </section>
    );
};

export default page;