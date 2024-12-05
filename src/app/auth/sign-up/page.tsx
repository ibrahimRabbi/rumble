'use client'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { districts, genders } from '@/utils/Tools';
import DialogModal from '@/components/Dialog/Dialog';
import { useSignUpMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';





const Signup = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isOpen, setIsOpen] = useState(false)
    const [district, setDistrict] = useState('')
    const [gender, setGender] = useState('male')
    const [signUp, { isLoading }] = useSignUpMutation()
    const [sendingOtp, setSendingOtp] = useState(0)
    const [data,setData] = useState({})


    if (isLoading) {
        return <h1 className='text-5xl flex justify-center items-center h-screen'>Loading...</h1>
    }



    const submitHandler = async (value: any) => {
        const userData = { ...value, district, gender }
        const response = await signUp(userData).unwrap()
        if (response.otp) {
            setSendingOtp(response.otp)
            setData(userData)
            setIsOpen(true)
        } else {
            toast.error(response.message)
        }
    }




    return (
        <section>
            <Link href='/' className='inline-block mt-4 ml-2'>
                <img className='w-40 rounded-sm' src="../../public/rumbleWeb.png" alt="" />
            </Link>
            <form onSubmit={handleSubmit(submitHandler)} className='lg:mt-10 mt-14 lg:w-1/2 w-[90%] m-auto'>
                <p className='text-[#323232] text-center text-3xl font-[700]'>Create New  Account</p>
                <div className='grid lg:grid-cols-2 gap-6 mt-5'>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='text'
                            {...register('name', { required: true })} placeholder="Name" />
                        {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='email' {...register('email', { required: true, })} placeholder="Email" />
                        {errors.email?.type === 'required' && <p className='text-red-500 text-sm'>email is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' {...register('phone', { required: true, minLength: 11, maxLength: 11 })} placeholder="Contact No" />
                        {errors.phone?.type === 'required' && <p className='text-red-500 text-sm'>contact number is required</p>}
                        {errors.phone?.type === 'minLength' && <p className='text-red-500 text-sm'>number length minimum 11 characters</p>}
                        {errors.phone?.type === 'maxLength' && <p className='text-red-500 text-sm'>number length maximum 11 characters</p>}
                    </div>

                    <div>
                        <Select onValueChange={(value) => setGender(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='select gender' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    genders?.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                        {errors.gender?.type === 'required' && <p className='text-red-500 text-sm'>gender is required</p>}
                    </div>



                    <div>
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
                        {errors.division?.type === 'required' && <p className='text-red-500 text-sm'>your division is required</p>}
                    </div>

                    <div>
                        <Input disabled={district === '' ? true : false} className='border p-2 rounded-md w-full' type='text'
                            {...register('address', { required: true, })} placeholder="Address" />
                        {errors.age?.type === 'required' && <p className='text-red-500 text-sm'>address is required</p>}
                    </div>




                </div>

                <div className='mt-6 lg:w-1/2 space-y-5 mx-auto'>
                    <div>
                        <Input type='password' className='border p-2 rounded-md w-full' {...register('password', { required: true, minLength: 8 })} placeholder="password" />
                        {errors.password?.type === 'required' && <p className='text-red-500 text-sm'>password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500 text-sm'>password length minimum 8 characters</p>}
                    </div>
                    <div>
                        <div>
                            <Input type='password' className='border p-2 rounded-md w-full' {...register('confirmPassword', { required: true, minLength: 8 })} placeholder="confirm password" />
                            {errors.confirmPassword?.type === 'required' && <p className='text-red-500 text-sm'>confirm password is required</p>}
                            {errors.confirmPassword?.type === 'minLength' && <p className='text-red-500 text-sm'>confirm password does not match</p>}
                        </div>
                        {/* <p className='text-red-500 text-sm mb-2'>error will appear</p> */}
                    </div>
                </div>
                <p className='mt-2 text-sm font-semibold text-center'>Already have an account? <Link href='/auth/sign-in' className='text-sky-500 font-bold'>Login</Link> </p>
                <DialogModal data={data} sendingOtp={sendingOtp} isOpen={isOpen} setIsOpen={setIsOpen} />
                <input type="submit" value='Send OTP' className='bg-[#ECE64A] hover:bg-[#dfd936] p-2 mt-12 rounded-lg font-semibold lg:w-1/2 w-full mx-auto block' />
            </form>


        </section>
    );
};

export default Signup;