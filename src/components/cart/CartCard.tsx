'use client'
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useDeleteCartMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
import cartData from '../../lib/cartData';


const CartCard = ({ data }: { data: any }) => {

    //const router = useRouter()
    const [quantity, setQuantity] = useState(data?.quantity as number)
    const [deleteCart, { isLoading }] = useDeleteCartMutation()
    const { refetch } = cartData()
    const totalAmount = data?.productId?.price * quantity


    const incrementHandler = () => {
        setQuantity(prev => {
            if (prev >= 10) {
                return prev = 10
            }
            return prev + 1
        })
    }

    const decrementHandler = () => {
        setQuantity(prev => {
            if (prev <= 1) {
                return prev = 1
            }
            return prev - 1
        })

    }

    const deleteHandler = async () => {
        const { success, message } = await deleteCart(data?._id).unwrap()
        if (success) {
            refetch()
            toast.success(message)
        }
    }


    // if (isLoading) {
    //     return <h1 className='text-5xl'>Loading...</h1>
    // }



    return (
        <div className="flex items-start justify-between border rounded-sm">

            <div className='flex items-start gap-5 lg:p-4 p-2'>
                <div className="avatar">
                    <div className="w-40 rounded-xl">
                        <img src={data?.productId?.coverPhoto} alt="" />
                    </div>
                </div>

                <div className=''>

                    <span className={`text-[1.0rem] text lg:font-semibold lg:text-zinc-800`}>{data?.productId?.title}</span>

                    {/* responsive */}
                    <p className="lg:hidden flex text-[1.0rem] font-semibold mt-1">৳{totalAmount}</p>

                    <div className='flex items-center lg:mt-5 mt-2 gap-10'>

                        <div>
                            <span className='text-[0.900rem] font-semibold text-zinc-700'>Size : </span>
                            <span className='lg:border text-[0.940rem] lg:py-2 lg:px-3 rounded-md lg:bg-zinc-300'>{data?.size}</span>
                        </div>

                        <div className='flex gap-1 items-center -m-1'>
                            <span className='text-[0.900rem] font-semibold text-zinc-700'>color :</span>
                            <span className='lg:border lg:p-2 text-[0.940rem] lg:bg-green-100 rounded-sm'>{data?.color}</span>
                        </div>

                    </div>

                    <div className='flex justify-between items-end'>
                        <div>
                            <p className='font-semibold text-[0.940rem] mt-5 text-zinc-700'>Quantity:</p>
                            <div className='flex justify-between border border-green-200 items-center w-28 px-3 bg-white rounded-md'>
                                <button onClick={decrementHandler} className=' text-lg font-bold'>-</button>
                                <p className=''>{quantity}</p>
                                <button onClick={incrementHandler} className=' text-lg font-bold' >+</button>
                            </div>
                        </div>
                        {/* responsive */}
                        <button onClick={deleteHandler}>
                            <FaTrashAlt className="text-[40px] text-red-800 lg:hidden block bg-red-200 p-2 rounded-lg" />
                        </button>
                    </div>

                </div>

            </div>


            <div className="flex flex-col items-end py-4 pr-4 gap-[85px]">
                <p className="text-lg font-semibold hidden lg:block">total-{totalAmount}৳</p>
                <button onClick={deleteHandler}>
                    <FaTrashAlt className="text-[40px] text-red-800 hidden lg:block bg-red-200 p-2 rounded-lg" />
                </button>
            </div>

        </div>
    );
};

export default CartCard;