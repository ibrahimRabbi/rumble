'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useGetUserQuery } from '@/redux/api/baseApi';
import ConfirmDialog from '@/components/confirmationDialog/ConfirmDialog';




const Email = ({ setOpen ,setTitle, setDis }: { setOpen: any,setTitle:any,setDis:any }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const ref = React.useRef<HTMLFormElement | null>(null)
    const { data: user } = useGetUserQuery({})

    useEffect(() => {
        emailjs.init("1i82K5U5J2626tuR8");
    }, [])

    const submit = (data: any) => {

        if (ref.current) {
            emailjs.sendForm("service_6f4zn7s", "template_s41gfcw", ref.current, '1i82K5U5J2626tuR8')
                .then((res: any) => {
                    if (res.status === 200) {
                        reset()
                        setTitle('email has been sent successfully')
                        setDis('We have recevied your email. we will respond to your email within 15 minutes, Thank you.')
                        setOpen(true)
                    }
                })
        }


    }




    return (
        <form ref={ref} onSubmit={handleSubmit(submit)} className='lg:w-[85%] mx-auto mt-10 space-y-6'>
            <div className='flex justify-between gap-6'>
                <label className="form-control w-full  ">
                    <span className="label-text">Email</span>
                    <Input
                        type="email"
                        defaultValue={user?.response?.email}
                        readOnly
                        placeholder='type your issue'
                        className="input input-bordered w-full  "
                        {...register('email', { required: true })}
                        name='email'
                    />
                    {errors.email?.type == 'required' && (<p className='text-red-600'>email in requird</p>)}
                </label>

                <label className="form-control w-full  ">
                    <span className="label-text">Name</span>
                    <Input
                        type="text"
                        defaultValue={user?.response?.name}
                        readOnly
                        placeholder='type your issue'
                        className="input input-bordered w-full  "
                        {...register('name', { required: true })}
                        name='name'
                    />
                    {errors.email?.type == 'required' && (<p className='text-red-600'>email in requird</p>)}
                </label>
            </div>





            <label className="form-control w-full  ">
                <span className="label-text">describe your issue shortly*</span>
                <Input
                    type="text"
                    placeholder='type your issue'
                    className="input input-bordered w-full  "
                    {...register('subject', { required: true })}
                    name='subject'
                />
                {errors.subject?.type == 'required' && (<p className='text-red-600'>email in requird</p>)}
            </label>

            <label className="form-control">
                <span className="label-text">elaborate your issue*</span>
                <Textarea
                    placeholder='type here'
                    className="textarea textarea-bordered w-full"
                    {...register('details', { required: true, maxLength: 600 })}
                    name='details'
                ></Textarea>
                {errors.details?.type == 'required' && (<p className='text-red-600'>please describe us your issue in details</p>)}
                {errors.details?.type == 'maxLength' && (<p></p>)}
            </label>

            <Button className='bg-green-500 w-full hover:bg-green-600 mt-5' type="submit" >
                <FiSend />
                Send
            </Button>
        </form>
    );
};

export default Email;