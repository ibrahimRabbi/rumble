'use client'
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import cartData from "../../lib/cartData";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/redux/api/baseApi";



const LeftComponent = () => {

    const { totalQuantity } = cartData()
    const { data: user } = useGetUserQuery({})
    const router = useRouter()

    const separate = user?.response?.name.split(' ')
    

    const searchHandler = (value:any) => {
        router.push(`/products/search?value=${value.target.value}`)
    }


    return (
        <div className=" w-[40%] gap-10 hidden lg:flex items-center justify-end">
            <div className="relative w-64">
                <Input onChange={searchHandler} className="w-full" placeholder="search..." />
                <IoSearch className="absolute top-3 right-2 z-10" />
            </div>

            <Link className="relative" href='/cart'>
                {
                    totalQuantity === 0 ? <p></p> : <span className="badge bg-green-500 absolute -mt-[13px] ml-[12px]">{totalQuantity}</span>
                }
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </Link>

            <Link href='/favoruit'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

            </Link>

            <Link className="flex items-center gap-1" href='/dashboard/user/profile'>
                <FaRegUser className="text-[22px]"/>
                <p className="text-sm lowercase">{separate ? separate[1] : ''}</p>
            </Link>
        </div>
    );
};

export default LeftComponent;