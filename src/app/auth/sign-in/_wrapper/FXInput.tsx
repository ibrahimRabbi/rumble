'use client'
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

const FXInput = () => {
    const { register, formState: { errors } } = useFormContext()
    const [isHide, setHide] = useState(true)
     



    return (
        <div className='space-y-5 lg:mt-2 mt-4'>
            <div>
                <Input {...register('email', { required: true, })} type='email' placeholder='type email' />
                {errors.email?.type === 'required' && <p className='text-red-500 text-sm'>email is required</p>}
            </div>

            <div>
                <div className='relative'>
                    <Input className='absolute' {...register('password', { required: true, minLength: 8 })} type={isHide ? 'password': 'text'} placeholder='type password' />
                    {
                        isHide ? <LuEyeClosed onClick={() => setHide(!isHide)} className='absolute right-2 top-3 size-4 cursor-pointer' /> : <LuEye onClick={() => setHide(!isHide)} className='absolute right-2 top-3 size-4 cursor-pointer' />
                            
                   }
                </div>
                {errors.password?.type === 'required' && <p className='text-red-500 text-sm'>password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500 text-sm'>password minimum 8 characters</p>}
            </div>
        </div>
        
    );
};

export default FXInput;