'use client'
import { Input } from '@/components/ui/input';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const FXInput = () => {
    const { register, formState: { errors } } = useFormContext()
     
    return (
        <div className='space-y-5 lg:mt-2 mt-4'>
            <div>
                <Input {...register('email', { required: true, })} type='email' placeholder='type email' />
                {errors.email?.type === 'required' && <p className='text-red-500 text-sm'>email is required</p>}
            </div>

            <div>
                <Input {...register('password', { required: true, minLength:8 })} type='password' placeholder='type password' />
                {errors.password?.type === 'required' && <p className='text-red-500 text-sm'>password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500 text-sm'>password minimum 8 characters</p>}
            </div>
        </div>
        
    );
};

export default FXInput;