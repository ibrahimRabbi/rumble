import Image from "next/image";
import Heading from "./Heading";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import logo from '@/assets/rumble-logo.png'
import Link from "next/link";



const Navber = () => {
    return (
        <nav className="w-full bg-slate-50">
            <Heading />
            <div className="w-[90%] py-2  mx-auto flex justify-between items-center">
                <Link href='/'><Image width={130} src={logo} alt="logo" /></Link>
                <MiddleComponent/>
                <LeftComponent />
            </div>

        </nav>
    );
};

export default Navber;