import { DeliverAddress } from '@/app/(commonlayout)/shipping-address/page';
import cartData from '@/lib/cartData';
import React from 'react';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';




const ShippingSummery = ({ shippingDetails}: { shippingDetails:DeliverAddress }) => {



    const { totalQuantity, amount, discount, vat,delivaryCharge, subTotal } = cartData()
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
        <div className='h-[430px] lg:sticky p-5 top-28'>
            <h1 className='text-center text-[20px] font-semibold'>Shopping Summery</h1>
            <div className='mt-5 space-y-5 text-zinc-900 text-[15px] font-[550]'>

                <div className="flex justify-between items-center mt-2">
                    Quantitiy :
                    <span className='text-zinc-700'>
                        {
                            totalQuantity === 0 ? "--" : totalQuantity
                        }
                    </span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    Total Amount :
                    <span className='text-zinc-700'>
                        {
                            amount === 0 ? '--' : `${amount}-TK`
                        }
                    </span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    Total Vat :
                    <span className='text-zinc-700'>
                        {
                            vat === 0 ? '--' : `${vat}-TK`
                        }
                    </span>

                </div>

                <div className="flex justify-between items-center mt-2">
                    Discount :
                    <span className='text-zinc-700'>
                        {
                            discount === 0 ? '--' : `${discount}-Tk`
                        }
                    </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    Delivary Charge :
                    <span className='text-zinc-700'>
                        {
                            delivaryCharge === 0 ? '--' : `${delivaryCharge}-Tk`
                        }
                    </span>
                </div>
                <div className="divider"></div>
                <p className="text-[21px] text-gray-900 font-semibold rounded-lg">Sub Total : {subTotal}-TK</p>
                <Button onClick={nextStepHandler} className={`bg-amber-400 hover:bg-amber-500 text-center font-semibold text-zinc-800 text-[16px] w-full`}>Procced To Pay</Button>
            </div>
        </div>

    );
};

export default ShippingSummery;