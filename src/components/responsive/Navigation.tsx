import { SlHome } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { FiUser } from "react-icons/fi";



const Navigation = () => {
    return (
        <section className='bg-slate-50 flex justify-between items-center w-full lg:hidden px-6 py-2 sticky bottom-0 z-50 border-t-2'>
            
            <SlHome className="size-8" />
            <AiOutlineBars className="size-8" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <IoMdHeartEmpty className="size-9" />
            <FiUser className="size-9 text-zinc-800" />

        </section>
    );
};

export default Navigation;