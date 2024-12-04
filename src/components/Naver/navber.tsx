import Image from "next/image";
import Heading from "./Heading";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import logo from '@/assets/rumble-logo.png'
import Link from "next/link";
import Rsearch from "../responsive/Rsearch";
import RnavLeft from "../responsive/RnavLeft";


const Navber = () => {



    return (
        <nav className="w-full lg:py-0 py-2 lg:bg-slate-50">
            <Heading />


            <div className="lg:w-[90%] w-[95%] py-1 mx-auto flex justify-between items-center">

                <Link href='/'><Image width={130} src={logo} alt="logo" /></Link>
                <MiddleComponent />
                <LeftComponent />

                <RnavLeft/>
            </div>

           <Rsearch/>

        </nav>
    );
};

export default Navber;