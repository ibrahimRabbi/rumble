import { Button } from '@/components/ui/button';
import React from 'react';

const Profile = () => {
    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <p className="text-gray-500 mb-6">
                Manage your details, view your tier status and change your
                password.
            </p>


            {/* User Info */}
            <div className="w-1/3 mx-auto text-center">
                <img
                    src="https://via.placeholder.com/100"
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mx-auto"
                />
                <h3 className="mt-4 text-lg font-semibold">Faraz Akhtar</h3>
                <p className="text-gray-500">+965 1234 5678</p>
            </div>

            <div className='grid grid-cols-3 gap-14 mt-10'>
                <div>
                    <div>Name</div>
                    <p className='text-sm font-semibold text-gray-500'>Ibrahim Rabbi</p>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <p>Number</p>
                        <p className='text-sky-500 font-semibold text-sm border-l border-zinc-600 pl-1'>change</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-500'>+8801986711517</p>
                </div>

                <div>
                    <div className='flex items-center space-x-2'>
                        <p>Email</p>
                        <p className='text-sky-500 font-semibold text-sm border-l border-zinc-600 pl-1'>change</p>
                    </div>
                    <p className='text-sm font-semibold text-gray-500'>rabbi@gmail.com</p>
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
                    <p className='text-sm font-semibold text-gray-500'>09-06-1999</p>
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



        </div>




    );
};

export default Profile;