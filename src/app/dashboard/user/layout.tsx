import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logo from '@/assets/rumble-logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCart } from "react-icons/pi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdOutlineLogout } from "react-icons/md";


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">

                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ml-12 mt-10 w-[85%]">
                        {children}
                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Open drawer
                        </label> */}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content text-lg min-h-full w-[280px] pt-6 px-4">
                            <Link href='/'> <Image src={logo} width={120} alt="logo" /></Link>
                            <div className="mt-7 space-y-3">
                                <li className="text-[16px]"><Link className="flex items-center" href='/'><AiOutlineHome className="size-5"/> Home</Link></li>
                                <li className="text-[16px]"><Link href='/dashboard/user/profile'>
                                    <CgProfile className="size-5" /> My account</Link></li>
                                <li className="text-[16px]"><Link href='/dashboard/user/order'><PiShoppingCart className="size-5" /> orders</Link></li>
                                <li className="text-[16px]"><Link className="flex items-center" href='/dashboard/user/address'><TiLocationArrowOutline className="size-[26px]"/>Deliver address</Link></li>
                                <li className="text-[16px]"><button className="bg-red-100 p-2 text-red-600"><MdOutlineLogout className="size-5"/> Logout</button></li>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default layout;