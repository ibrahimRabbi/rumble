'use client'
import AddDetailsDialog from '@/components/addDetailsDialog/AddDetailsDialog';
import ShippingSummery from '@/components/Summery/ShippingSummery';
import { useDeleteAddressMutation, useGetUserQuery } from '@/redux/api/baseApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdAdd } from "react-icons/io";
import bekash from '@/assets/payment/bekash.png'
import nagad from '@/assets/payment/nagad-removebg-preview.png'
import masterCard from '@/assets/payment/masterCard.png'
import visaCard from '@/assets/payment/visa-removebg-preview.png'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { changeDelivaryChrg } from '@/redux/features/shippingSlice';
import { Checkbox } from '@/components/ui/checkbox';
import RprocedToPay from '@/components/responsive/RprocedToPay';
import { useSearchParams } from 'next/navigation';






export type DeliverAddress = {
    name: string,
    phone: string,
    address: string,
    district: string,
    isSelect: boolean,
    _id:string
}


const page = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [details, setDetails] = useState<DeliverAddress>({
    name: '',
    phone: '',
    address: '',
    district: '',
    isSelect: false,
    _id:''
})
    const [isChecked, setChecked] = useState(false)
    const [deleteaddress, { }] = useDeleteAddressMutation()
    const dispatch = useAppDispatch()
    const { data: user } = useGetUserQuery({})
    const query = useSearchParams()
    const productId:any = query.get('id')
    const price:any = query.get('price')

    
     



    const pickDetails = (details: DeliverAddress, checked: boolean) => {
        if (checked) {
            setDetails(details)
            setChecked(checked)

            if (details.district.toLowerCase() !== 'dhaka') {
                dispatch(changeDelivaryChrg(120))
            } else {
                dispatch(changeDelivaryChrg(70))
            }
        }
    }


    const deleteHandler = async (value: DeliverAddress) => {
        const response = await deleteaddress(value).unwrap()
        if (response?.success) {
            toast.success('deleted successfully')
        }
    }

   

    return (
       
            <section className='lg:w-[90%] min-h-screen mx-auto lg:my-8'>
                {/* responsive */}
            <Suspense fallback={<p className='text-2xl'>loading...</p>}>
                <RprocedToPay price={price} ProductId={productId} shippingDetails={details as DeliverAddress} />
            </Suspense>

                <p className='text-[#493115] text-lg lg:mt-0 mt-8 font-semibold lg:text-start text-center'>Choose a shipping Address & Details</p>

                <div className='flex justify-between items-start mt-4'>
                    <div className='lg:w-[68%] w-full'>

                        <div className='lg:w-full w-[95%] mx-auto lg:border lg:p-5 rounded-md'>

                            <div className='hidden lg:block'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-lg font-semibold'>Your Details</p>
                                    <Link href='#' className='text-sky-700 font-semibold block'>Shipping to more than one address?</Link>
                                </div>
                                <hr className='mt-1' />
                            </div>
                        <Suspense fallback={<p>loading...</p>}>

                            <div className='flex flex-col gap-3'>
                                {
                                    user?.response?.deliverAddress?.length > 0 ?
                                        user?.response?.deliverAddress?.map((v: DeliverAddress) => {
                                            return (

                                                <div key={v?._id} className='flex items-center justify-between rounded-md bg-green-50 mt-3 p-3'>
                                                    <div className='flex items-center gap-2'>
                                                        <Checkbox checked={v.district === details.district? true: false} onCheckedChange={(chacked) => pickDetails(v, chacked as boolean)} />

                                                        <p className='font-semibold'>{v?.name}</p>
                                                        <p className=''>{v?.phone}</p>

                                                        <p className='lg:pl-4'>{v?.address}, <span>{v?.district}</span></p>
                                                    </div>
                                                    <button onClick={() => deleteHandler(v)} className='text-sky-600 underline'>Delete</button>
                                                </div>
                                            )
                                        }) : <div className='flex items-center justify-center flex-col mt-5 gap-2'>
                                            <div className='text-sm font-semibold text-zinc-600'>you havent got any shipping details please add your details</div>
                                            <button onClick={() => setIsOpen(true)} className='flex gap-1 items-center'>
                                                <IoMdAdd className='text-xl' />
                                                <p className='text-sky-600 text-[17px]'>Add New Details</p>
                                            </button>
                                        </div>
                                }
                            </div>
</Suspense>

                            <button onClick={() => setIsOpen(true)} className='flex gap-1 mt-7 items-center'>
                                <IoMdAdd className='text-xl' />
                                <p className='text-sky-600 text-[17px]'>Add New Details</p>
                            </button>
                        <Suspense fallback={<p className='text-2xl'>loading...</p>}>
                            <AddDetailsDialog isOpen={isOpen} setIsOpen={setIsOpen} />
                        </Suspense>


                        </div>


                        <div className='flex justify-center items-center gap-2 lg:my-10 mt-20'>
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
                    <Suspense fallback={<p className='text-2xl'>loading...</p>}>
                        <ShippingSummery price={price} ProductId={productId} shippingDetails={details as DeliverAddress} />
                    </Suspense>
                       
                    </div>
                </div>
            </section>

    );
};

export default page;