import cartData from "@/lib/cartData";
import Link from "next/link";
 

 

const RprocedToCheck = ({ title, redirect }: { title: string, redirect :string}) => {

    const {subTotal, data} = cartData()
    return (
        <div className='lg:hidden block sticky top-0 z-50 bg-white p-4'>
            <p className="text-[21px] text-gray-900 font-semibold rounded-lg">Sub Total : {subTotal}৳</p>
            <Link href={redirect} className={`btn mt-2 bg-amber-400 hover:bg-amber-500 block p-4 text-center font-semibold text-zinc-900 text-[16px] rounded-lg w-[90%] mx-auto ${data?.response <= 0 ? 'btn-disabled' : 'enabled:'}`}>{title}</Link>
        </div>
    );
};

export default RprocedToCheck;