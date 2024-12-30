import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DeliverAddress } from "@/app/(commonlayout)/shipping-address/page";
import useCartData from "@/lib/cartData";
import { useAppSelector } from "@/redux/hook";


const RprocedToPay = ({ shippingDetails, price, ProductId }: { shippingDetails: DeliverAddress, price: any, ProductId: any }) => {

    const router = useRouter()
    const { subTotal, data, delivaryCharge } = useCartData()
    const { quantity } = useAppSelector(state => state.cart)
    const detailsLength = Object.keys(shippingDetails).length
    const BuyNowTotal = (parseInt(price) * quantity) + delivaryCharge



    const nextStepHandler = () => {
        if (detailsLength === 0) {
            toast.error('please select your address & details')
        } else {
            if (ProductId) {
                router.push(`/payment?address=${shippingDetails?.address}&district=${shippingDetails?.district}&phone=${shippingDetails?.phone}&name=${shippingDetails?.name}&subtotal=${BuyNowTotal}&productId=${ProductId}`)
            } else {
                router.push(`/payment?address=${shippingDetails?.address}&district=${shippingDetails?.district}&phone=${shippingDetails?.phone}&name=${shippingDetails?.name}`)
            }
        }
    }





    return (
        <div className='lg:hidden block shadow-lg sticky top-0 z-50 bg-white p-4 w-full'>
            <p className="text-[21px] text-gray-900 font-semibold rounded-lg">Sub Total : {ProductId ? BuyNowTotal : subTotal}৳</p>
            <Button onClick={nextStepHandler} className={`bg-amber-400 hover:bg-amber-500 mt-2 text-center font-semibold text-zinc-800 text-[16px] w-[90%]`}>procced To pay</Button>
        </div>
    );
};

export default RprocedToPay;