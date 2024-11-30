import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logo from '@/assets/rumble-logo.png'


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
                        <ul className="menu bg-base-200 text-base-content min-h-full w-[280px] pt-6 px-4">
                            <Link href='/'> <Image src={logo} width={120} alt="logo" /></Link>
                            <div className="mt-7 space-y-3">
                                <li className="text-[16px]"><Link href='/dashboard/user/profile'>overview</Link></li>
                                <li className="text-[16px]"><Link href='/dashboard/user/profile'>My account</Link></li>
                                <li className="text-[16px]"><Link href='/dashboard/user/order'>orders</Link></li>
                                <li className="text-[16px]"><Link href='/dashboard/user/address'>Deliver address</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default layout;