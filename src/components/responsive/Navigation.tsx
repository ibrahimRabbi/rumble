'use client'
import { SlHome } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import Rdrower from "./Rdrower";
import { useGetUserQuery } from "@/redux/api/baseApi";
import { usePathname } from "next/navigation";



const Navigation = () => {


    const { data: user } = useGetUserQuery({})

    const separate = user?.response?.name.split(' ')

    const path = usePathname()

 



    return (
        <section className='bg-slate-50 text-center flex justify-between items-center w-full lg:hidden px-6 py-[6px] sticky bottom-0 z-50 border-t-2'>

            <Link className={`${path== '/'? 'text-green-800':''} flex flex-col justify-center items-center`} href='/'>
                <SlHome className="size-6" />
                <p className="text-sm">home</p>
            </Link>
            <label className="flex flex-col justify-center items-center" htmlFor="my-drawer-3">
                <AiOutlineBars className="size-6" />
                <p className="text-sm">manu</p>
                <Rdrower />
            </label>
            <Link className={`${path == '/cart' ? 'text-green-800' : ''} relative flex flex-col justify-center items-center`} href='/cart'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <p className="text-zinc-950 text-sm">cart</p>
            </Link>

            <Link className="flex flex-col justify-center items-center" href='/'>
                <IoMdHeartEmpty className="size-7" />
                <p className="text-sm">favoruit</p>
            </Link>
            <Link className={`${path == '/dashboard/user/profile' ? 'bg-green-800' : ''} flex flex-col justify-center items-center`} href={user?.success ? '/dashboard/user/profile' : `/auth/sign-in?redirect=/dashboard/user/profile`}>
                <FiUser className="size-7 text-zinc-800" />
                <p className="lowercase text-sm">{separate ? separate[1] : 'account'}</p>
            </Link>
        </section>
    );
};

export default Navigation;