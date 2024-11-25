'use client'
import RprocedToCheck from '@/app/responsive/RprocedToCheck';
import Summery from '@/components/Summery/Summery';
import CartCard from '@/components/cart/CartCard';
import cartData from '@/lib/cartData';
import Link from 'next/link';



const page = () => {

    const { data, subTotal, isLoading } = cartData()


    // if (isLoading) {
    //     return <h1 className='text-5xl flex justify-center items-center h-screen'>Loading...</h1>
    // }

    return (
        <section className='lg:w-[90%]  mx-auto lg:flex items-start justify-between lg:my-10 min-h-screen'>
            {/* responsive */}
            <RprocedToCheck redirect='/shipping-address' title='procced To Checkout' />

            <div className='lg:w-[69%] w-[95%] mx-auto lg:mt-0 mt-4 space-y-4'>
                {
                    data?.response?.length < 1 ? <div className='items-center flex flex-col gap-2 mt-36'>
                        <h1 className='text-xl font-semibold text-green-800'>You did not added any item</h1>
                        <Link href='/category' className='bg-green-300 p-2 rounded-md border hover:bg-green-400 font-semibold text-zinc-800'>Go To Shopping</Link>
                    </div> : data?.response?.map((v: any) => <CartCard key={v._id} data={v} />)
                }
            </div>

            <div className='lg:block hidden lg:w-[28%] border'>
                <Summery />
            </div>
        </section>
    );
};

export default page;