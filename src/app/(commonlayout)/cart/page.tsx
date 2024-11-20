'use client'
import Summery from '@/components/Summery/Summery';
import CartCard from '@/components/cart/CartCard';
import cartData from '@/lib/cartData';
import Link from 'next/link';
 


const page = () => {
    
    const { data, isLoading } = cartData()


    if (isLoading) {
        return <h1 className='text-5xl flex justify-center items-center h-screen'>Loading...</h1>
    }

    return (
        <section className='w-[90%] mx-auto flex items-start justify-between my-10'>
            <div className='w-[69%] space-y-4'>
                {
                    data?.response?.length < 1 ? <div className='items-center flex flex-col gap-2 mt-36'>
                        <h1 className='text-xl font-semibold text-green-800'>You did not added any item</h1>
                        <Link href='/showAll' className='bg-green-300 p-2 rounded-md border hover:bg-green-400 font-semibold text-zinc-800'>Go To Shopping</Link>
                    </div> : data?.response?.map((v: any) => <CartCard key={v._id} data={v} />)
                }
            </div>

            <div className='w-[28%] border'>
                <Summery/>
            </div>
        </section>
    );
};

export default page;