'use client'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


const SignInProviderBtn = () => {


    return (
        <div className=' flex lg:flex-row flex-col justify-center items-center gap-4 mt-4'>
            <button className='flex items-center gap-1 border-2 lg:px-10 px-14 py-2 rounded-md'><FcGoogle className='text-[25px]'/> Signin with Google</button>
            <button className='flex items-center gap-1 border-2 lg:px-10 px-14 py-2 rounded-md'><FaApple className='text-[25px]' /> Signin with Apple</button>
        </div>
    );
};

export default SignInProviderBtn;