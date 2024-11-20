import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
 
 


const Heading = () => {


    return (
        <div className='py-2 hidden lg:flex bg-green-50 border-b border-[#ebeaea] text-zinc-700 welcome font-semibold text-sm'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className='lg:flex items-center gap-1 font-semibold hidden'>
                    <HiHashtag className="text-lg" />
                    <p className=''>Welcome to Rumble..!!</p>
                </div>

                <div className='flex items-center lg:mr-1 mx-auto'>
                    <div className='flex flex-col-reverse items-center'>
                        <p className="text-xs font-bold">Wish List</p>
                        <FaHeartbeat className="text-xl text-red-500" />
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <Link href='/contact' className='lg:flex items-center gap-2'>
                            <TfiEmail className='text-2xl text-zinc-800 font-bold' />
                            <div className='text-xs hidden lg:block'>
                                <p className='font-bold'>Contact us</p>
                                <p className=' text-zinc-600 font-semibold'>for any issue</p>
                            </div>
                        </Link>
                    </div>
                     
                    <div className="divider divider-horizontal"></div>
                    <div className="flex flex-row-reverse items-center">
                        <div className="flex flex-col-reverse items-center">
                            <span>BDT</span>
                            <span className="font-extrabold">৳</span>
                        </div>   
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Heading;