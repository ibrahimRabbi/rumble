import COD from '@/assets/payment/cash-on-delivery-removebg-preview.png'
import bekash from '@/assets/payment/bekash.png'
import nagad from '@/assets/payment/nagad-removebg-preview.png'
import bank from '@/assets/payment/atm-card-removebg-preview.png'
import Link from 'next/link';
import Image from 'next/image';

 

const page = ({ searchParams }: { searchParams:any }) => {
    const {address, district,phone,name } = searchParams
    
     

    return (
        <div className='w-[90%] mt-10 mx-auto'>
            <p className='text-[22px] font-semibold text-[#493115]'>Choose Payment Method</p>
            <div className='flex justify-between items-start mt-4'>
                <div className='flex justify-start items-cente gap-14 w-[60%]'>

                    <Link className='border p-4 text-center space-y-2' href='#'>
                        <Image src={COD} alt='COD' width={115} />
                        <p className='font-semibold text-zinc-700'>Cash on Delivary</p>
                    </Link>
                    <Link className='border p-4 text-center space-y-2' href='#'>
                        <Image src={bekash} alt='bekash' width={115} />
                        <p className='font-semibold text-zinc-700'>Bakash</p>
                    </Link>
                    <Link className='border p-2 text-center space-y-2' href='#'>
                        <Image src={nagad} alt='nagad' width={124} />
                        <p className='font-semibold text-zinc-700'>Nagad</p>
                    </Link>
                    <Link className='border p-4 text-center space-y-2' href='#'>
                        <Image src={bank} alt='bank' width={115} />
                        <p className='font-semibold text-zinc-700'>Dedit/credit card</p>
                    </Link>
                </div>

                <div className='bg-slate-100 p-4 w-[34%]'>
                    <p className='text-xl font-semibold text-zinc-900'>Shopping Summery</p>
                    <div className='flex justify-between items-center mt-5'>
                        <p className='text-gray-500'>Subtotal (2 items and shipping fee included)</p>
                        <p>400-Tk</p>
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-lg text-zinc-800'>Payable Amount :</p>
                        <p className='text-2xl text-green-950 font-semibold'>400-Tk</p>
                    </div>
                </div>
            </div>
            
            
           
             

        </div>
    );
};

export default page;