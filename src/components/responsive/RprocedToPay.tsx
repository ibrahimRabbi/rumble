import cartData from "@/lib/cartData";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DeliverAddress } from "@/app/(commonlayout)/shipping-address/page";


const RprocedToPay = ({ shippingDetails }: { shippingDetails: DeliverAddress }) => {
    const { subTotal, data } = cartData()
    const router = useRouter()
    const detailsLength = Object.keys(shippingDetails).length


    const nextStepHandler = () => {
        if (detailsLength === 0) {
            toast.error('please select your address & details')
        } else {
            router.push(`/payment?address=${shippingDetails?.address}&district=${shippingDetails?.district}&phone=${shippingDetails?.phone}&name=${shippingDetails?.name}`)
        }
    }





    return (
        <div className='lg:hidden block shadow-lg sticky top-0 z-50 bg-white p-4 w-full'>
            <p className="text-[21px] text-gray-900 font-semibold rounded-lg">Sub Total : {subTotal}৳</p>
            <Button onClick={nextStepHandler} className={`bg-amber-400 hover:bg-amber-500 mt-2 text-center font-semibold text-zinc-800 text-[16px] w-[90%]`}>procced To pay</Button>
        </div>
    );
};

export default RprocedToPay;