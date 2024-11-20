'use client'
import { districts } from '@/utils/Tools';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { DeliverAddress } from '@/app/(commonlayout)/shipping-address/page';
import { useAddNewAddressMutation, useGetUserQuery } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';






const DetailsForm = ({ setIsOpen }: { setIsOpen: any }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const sorting = districts.sort()
    const [district, setDistrict] = useState('')
    const [addNewaddress, { }] = useAddNewAddressMutation()
    const { data: user, refetch } = useGetUserQuery({})
    const router = useRouter()


    const submitHandler = async (data: any) => {
        const response = await addNewaddress({ ...data, district }).unwrap()
        if (response?.message == 'jwt expired') {
            toast.error('Login expired')
            router.push('/auth/sign-in')
        }

        if (response.success) {
            setIsOpen(false)
            refetch()
            toast.success('new details added successfully')
        }
    }




    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='space-y-2'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Full Name</span>
                        </div>
                        <Input type="text" placeholder="EX : Ibrahim Rabbi" {...register('name', { required: true })} />
                        {errors.name?.type === 'required' && <p className='text-red-600'>name is required</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">your number</span>
                        </div>
                        <Input type="number" placeholder="EX : 01849478744" {...register('phone', { required: true, maxLength: 11 })} />
                        {errors.number?.type === 'required' && <p className='text-red-600'>Your phone number is required</p>}
                        {errors.number?.type === 'maxLength' && <p className='text-red-600'>please input a valid number</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Your City or district</span>
                        </div>
                        <Select onValueChange={(value) => setDistrict(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='select district' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    districts?.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                        {errors.city?.type === 'required' && <p className='text-red-600'>please select your city</p>}
                    </label>


                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">your home address or street,area</span>
                        </div>
                        <Input type="text" placeholder="EX : road no 9 , sector-6 , uttara" {...register('address', { required: true })} />
                        {errors.address?.type === "required" && <p className='text-red-600'>your street or home address is required</p>}
                    </label>

                </div>
                <input className=' btn w-[50%] bg-yellow-400 mt-10 hover:bg-[#dbdb2a]' value='Add now' type="submit" />
            </form>
        </div>
    );
};

export default DetailsForm;