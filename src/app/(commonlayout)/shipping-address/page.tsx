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





    if (isLoading) {
        return <h1 className='text-2xl flex justify-center mt-10'>Loading...</h1>
    }


    return (
        <section className='w-[90%] mx-auto mt-8'>
            <p className='text-[#493115] text-xl font-semibold'>Choose a shipping Address & Details</p>

            <div className='flex justify-between items-start mt-4'>
                <div className='w-[68%]'>
                    <div className='w-full border p-5 rounded-md'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-semibold'>Your Details</p>
                            <Link href='/' className='text-sky-700 font-semibold'>Shipping to more than one address?</Link>
                        </div>
                        <hr className='mt-1' />

                        {
                            user?.response?.deliverAddress?.map((v: DeliverAddress) => {
                                return (
                                    <div key={Math.random()} className='flex items-center justify-between rounded-md bg-green-100 mt-3 p-3'>
                                        <div className='flex items-center gap-2'>
                                            <input type='checkbox' onChange={() => pickDetails(v)} />
                                            <p className='font-semibold'>{v?.name}</p>
                                            <p className=''>{v?.phone}</p>
                                            <p className='pl-4'>{v?.address}, <span>{v?.district}</span></p>
                                        </div>
                                        <button onClick={() => deleteHandler(v)} className='text-sky-600 underline'>Delete</button>
                                    </div>
                                )
                            })
                        }

                        <button onClick={() => setIsOpen(true)} className='flex gap-1 mt-7 items-center'>
                            <IoMdAdd className='text-xl' />
                            <p className='text-sky-600 text-[17px]'>Add New Details</p>
                        </button>
                        <AddDetailsDialog isOpen={isOpen} setIsOpen={setIsOpen} />


                    </div>
                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <p className='font-semibold text-zinc-700'>We Are Accept :</p>
                        <div className='flex justify-center gap-5 items-center'>
                            <Image width={30} src={bekash} alt='bekash' />
                            <Image width={36} src={nagad} alt='nagad' />
                            <Image width={30} src={masterCard} alt='master card' />
                            <Image width={34} src={visaCard} alt='visa card' />
                        </div>
                    </div>

                </div>





                <div className='w-[28%] border'>
                    <ShippingSummery shippingDetails={details as DeliverAddress} />
                </div>
            </div>
        </section>
    );
};

export default page;