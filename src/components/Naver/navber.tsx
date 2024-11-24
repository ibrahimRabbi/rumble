import Image from "next/image";
import Heading from "./Heading";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import logo from '@/assets/rumble-logo.png'
import Link from "next/link";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";


const Navber = () => {
    return (
        <nav className="w-full py-2 lg:mt-0 lg:bg-slate-50">
            <Heading/>
            <div className="lg:w-[90%] w-[95%] py-2 mx-auto flex justify-between items-center">
                <Link href='/'><Image width={130} src={logo} alt="logo" /></Link>
                    <MiddleComponent />
                <LeftComponent />
               
                <div className="lg:hidden flex justify-end items-center gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-zinc-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <IoNotificationsOutline className="size-7 text-zinc-700" />
                </div>
            </div>

            <div className="lg:hidden block relative w-[95%] mx-auto mt-2 ">
                <Input className="w-full" placeholder="search..." />
                <IoSearch className="absolute top-3 right-2 z-10" />
            </div>

        </nav>
    );
};

export default Navber;