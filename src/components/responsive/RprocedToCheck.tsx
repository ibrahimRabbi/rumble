import cartData from "@/lib/cartData";
import Link from "next/link";
 

 

const RprocedToCheck = () => {

    const { subTotal, data } = cartData()
    
    return (
        <div className='lg:hidden shadow-lg block sticky top-0 z-50 bg-white p-4'>
            <p className="text-[21px] text-gray-900 font-semibold rounded-lg">Sub Total : {subTotal}৳</p>
            <Link href='/shipping-address' className={`btn mt-2 bg-amber-400 hover:bg-amber-500 block p-4 text-center font-semibold text-zinc-900 text-[16px] rounded-lg w-[90%] mx-auto ${data?.response <= 0 ? 'btn-disabled' : 'enabled:'}`}>procced To checkout</Link>
        </div>
    );
};

export default RprocedToCheck;