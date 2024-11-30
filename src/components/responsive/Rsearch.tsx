'use client'
import { Input } from '../ui/input';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const Rsearch = () => {

    const router = useRouter()

    const searchHandler = (value: any) => {
        router.push(`/products/search?value=${value.target.value}`)
    }



    return (
        <div className="lg:hidden block relative w-[95%] mx-auto mt-5">
            <Input onChange={searchHandler} className="w-full" placeholder="search..." />
            <IoSearch className="absolute top-3 right-2 z-10" />
        </div>
    );
};

export default Rsearch;