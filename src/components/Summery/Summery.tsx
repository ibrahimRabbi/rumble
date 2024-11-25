'use client'
import Link from 'next/link';
import cartData from '@/lib/cartData';



const Summery = () => {
     
    const { totalQuantity, amount, discount, delivaryCharge, vat, subTotal, data } = cartData()


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
                            delivaryCharge < 1 ? '--' : `${delivaryCharge}-Tk`
                        }
                    </span>
                </div>
                <div className="divider"></div>
                <p className="text-[21px] text-gray-900 font-semibold rounded-lg">Sub Total : {subTotal}৳</p>
                <Link href='/shipping-address' className={`btn bg-amber-400 hover:bg-amber-500 mt-18 block p-4 text-center font-semibold text-zinc-900 text-[16px] rounded-lg w-full ${data?.response <= 0 ? 'btn-disabled' : 'enabled:'}`}>Procced To Checkout</Link>
            </div>
        </div>



    );
};

export default Summery