import { getUser } from "@/lib/service";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeartbeat } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
 


const Heading = async () => {

    const user = await getUser()

    return (
        <div className='py-1 hidden lg:flex bg-green-50 border-b border-[#ebeaea] text-zinc-700 font-semibold text-sm'>
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
                        <Link href={user?.success ? '/contact' : `auth/sign-in?redirect=/contact`} className='lg:flex items-center gap-2'>
                             <RiCustomerService2Line className="size-7"/>
                        </Link>
                    </div>
                     
                    <div className="divider divider-horizontal"></div>
                    <div className="flex flex-row-reverse items-center">
                        <div className="flex text-sm flex-col-reverse items-center">
                            <span>৳ BDT</span>
                        </div>   
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Heading;