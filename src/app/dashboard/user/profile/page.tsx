'use client'
import { Button } from '@/components/ui/button';
import { useGetUserQuery } from '@/redux/api/baseApi';
import Image from 'next/image';
import React from 'react';

const Profile = () => {

    const {data:user} = useGetUserQuery({})



    return (
        <section>
            <div>
                <h2 className="text-2xl font-semibold">Profile</h2>
                <p className='text-sm text-zinc-700'>manage your details</p>
            </div>


            {/* User Info */}
            <div className="w-1/3 mx-auto text-center mt-10">
                <Image
                    src="https://i.ibb.co.com/R0tWRV4/man.png"
                    alt="User Avatar"
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded-full mx-auto"
                />
                <h3 className="mt-4 text-lg font-semibold">{user?.response?.name}</h3>
                <p className="text-gray-500">{user?.response?.phone}</p>
            </div>

            <div className='grid grid-cols-3 gap-14 mt-10'>
                <div>
                    <div>Name</div>
                    <p className='text-sm font-semibold text-gray-500'>{user?.response?.name}</p>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <p>Number</p>
                        <p className='text-sky-500 font-semibold text-sm border-l border-zinc-600 pl-1'>change</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-500'>+88{user?.response?.phone}</p>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <p>Email</p>
                        <p className='text-sky-500 font-semibold text-sm border-l border-zinc-600 pl-1'>change</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-500'>{user?.response?.email}</p>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <p>Password</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-500'>*******************</p>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <p>Birthday</p>
                        <p className='text-sky-500 font-semibold text-sm border-l border-zinc-600 pl-1'>change</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-400'>please select your gender</p>
                </div>


                <div>
                    <div className='flex items-center space-x-2'>
                        <p>gender</p>
                        <p className='text-sky-500 font-semibold text-sm border-l border-zinc-600 pl-1'>Add</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-400'>please enter your gender</p>
                </div>
            </div>

            <div className='mt-10'>
                <Button className='bg-green-500 font-semibold'>EDIT PROFILE</Button>
            </div>



        </section>




    );
};

export default Profile;