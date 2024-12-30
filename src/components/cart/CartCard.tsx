'use client'
import { FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDeleteCartMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';
import useCartData from '@/lib/cartData';
import Image from 'next/image';


const CartCard = ({ data }: { data: any }) => {


    const [quantity, setQuantity] = useState(data?.quantity as number)
    const [deleteCart] = useDeleteCartMutation()
    const { refetch } = useCartData()
    const totalAmount = data?.productId?.price * quantity


    useEffect(() => {
        fetch(` http://localhost:5000/api/cart/update-cart/${data?._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    refetch()
                }
            })
    }, [quantity, data])


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
        <section className="border rounded-sm">
            <div className='flex items-start gap-5 lg:p-4 p-2'>
                <div className="avatar">
                    <div className="w-40 rounded-xl">
                        <Image width={200} height={220} src={data?.productId?.coverPhoto} alt="cart" />
                    </div>
                </div>



                {/************ content ***************/}
                <div className='w-full'>
                    {/* 1 */}
                    <div className='flex lg:flex-row flex-col w-full lg:justify-between lg:items-center gap-1'>
                        <p className={`text-[1.0rem] text lg:font-semibold lg:text-zinc-800`}>{data?.productId?.title}</p>
                        <p className="text-[1.15rem] font-semibold">৳{totalAmount}</p>
                    </div>
                    {/* 2 */}
                    <div className='lg:w-[40%] w-[70%] lg:mt-4 mt-2 flex justify-between items-center'>
                        <div className='flex lg:items-center lg:flex-row gap-1 lg:gap-2 flex-col'>
                            <span className='text-[0.900rem] font-semibold text-zinc-700'>Size : </span>
                            <p className='lg:border text-[0.940rem] py-2 text-center lg:px-3 rounded-md bg-zinc-300'> {data?.size}</p>
                        </div>

                        <div className='flex lg:flex-row flex-col lg:items-center gap-1 lg:gap-2'>
                            <span className='text-[0.900rem] font-semibold text-zinc-700'>color :</span>
                            <p className='lg:border p-2 text-[0.940rem] bg-green-100 rounded-sm'>{data?.color}</p>
                        </div>
                    </div>


                    {/* 3 */}
                    <div className='w-full flex justify-between lg:items-center items-end mt-3 lg:mt-6'>
                        <div>
                            <p className='font-semibold text-[0.900rem] text-zinc-700'>Quantity:</p>
                            <div className='flex justify-between border border-green-200 items-center w-28 px-3 bg-white rounded-md'>
                                <button onClick={decrementHandler} className=' text-lg font-bold'>-</button>
                                <p className=''>{quantity}</p>
                                <button onClick={incrementHandler} className=' text-lg font-bold' >+</button>
                            </div>
                        </div>

                        <button onClick={deleteHandler}>
                            <FaTrashAlt className="text-[40px] text-red-800 bg-red-200 p-2 rounded-lg" />
                        </button>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default CartCard;



