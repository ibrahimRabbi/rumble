import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import FxForm from "./_wrapper/FxForm";
import FXInput from "./_wrapper/FXInput";
import Image from "next/image";
import logo from '@/assets/rumble-logo.png'




const SignIn = () => {


    return (
        <section>
            <Link href='/' className='inline-block mt-4 ml-2'>
                <Image className='w-40 rounded-sm' width={250} height={80} src={logo} alt="logo" />
            </Link>
            <div className='lg:mt-10 mt-16'>

                <div className='lg:w-1/2 w-[90%] m-auto'>
                    <p className='text-[#323232] text-center text-3xl font-[700]'>Sign in to your Account</p>
                    <div className=' flex lg:flex-row flex-col justify-center items-center gap-4 mt-4'>
                        <button className='flex items-center gap-1 border-2 lg:px-10 px-14 py-2 rounded-md'><FcGoogle className='text-[25px]' /> Signup with Google</button>
                        <button className='flex items-center gap-1 border-2 lg:px-10 px-14 py-2 rounded-md'><FaApple className='text-[25px]' /> Signup with Apple</button>
                    </div>
                </div>



                <FxForm>
                    <div className='mt-6 lg:w-1/2  mx-auto'>
                        <p className='text-[#323232] text-center text-2xl font-[700]'>Sign in to your Account</p>
                        <FXInput/>
                        <input type="submit" value='Login' className='bg-[#ECE64A] hover:bg-[#dfd936] p-2 mt-8 rounded-lg font-semibold w-full mx-auto block' />
                    </div>
                </FxForm>


                <div className='lg:w-1/5 mt-5 mx-auto text-xs font-semibold text-center'>
                    <Link href='/auth/sign-up' className='underline'>Forget Password?</Link>
                    <p className='mt-1'>dont have an account? <Link href='/auth/sign-up' className='text-sky-500 font-bold'>Sign Up</Link> </p>
                </div>

            </div>

        </section>
    );
};

export default SignIn;