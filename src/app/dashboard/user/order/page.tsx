'use client'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { Input } from '@/components/ui/input';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from "next/navigation";
import { useGetOrderQuery } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import moment from 'moment';
import { useEffect, useState } from "react";


const page = () => {
    const router = useRouter()
   const token =  localStorage.getItem('accessToken')
    const { data } = useGetOrderQuery({})
    const [orderData, setorderData] = useState(data?.response)
 
    if (data?.message === 'jwt expired') {
        toast.error('login expired')
        router.push('/auth/sign-in')
    }  


    useEffect(() => {
       fetch(`http://localhost:5000/api/order/get-order`, {
            method: 'GET',
            headers: { 'authorization': token as string },
        })
       .then(res=>res.json())  
        .then(res=>setorderData(res?.response))
    },[])

     
    const searchHandler = async (value: any) => {
        const fetching = await fetch(`http://localhost:5000/api/order/get-order?search=${value.target.value}`, {
            method: 'GET',
            headers: { 'authorization': token as string },
        })
        const cont = await fetching.json()
        setorderData(cont?.response)
    }


    return (
        <section className=''>
            <div>
                <p className='text-2xl text-zinc-950 font-semibold'>My orders</p>
                <p className='text-sm text-zinc-700'>order last 90 days</p>
            </div>
            <div className="mt-8 flex justify-end items-end">
                <div className="relative w-[30%]">
                <Input onChange={searchHandler} className="w-full" placeholder="search by order ID..."/>
                    <IoSearch className="absolute top-3 right-2 z-10" />
                </div>
           </div>
            <Table className='w-full mx-auto mt-5'>
                <TableCaption>A list of your last 90 days order</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>order ID</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>payment status</TableHead>
                        <TableHead>order status</TableHead>
                        <TableHead>No of items</TableHead>
                        <TableHead>order date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        orderData?.map((v:any) => {
                            return (
                                <TableRow key={v?._id}>
                                    <TableCell className="font-medium">{v?.orderId}</TableCell>
                                    <TableCell>৳ {v?.amount}</TableCell>
                                    <TableCell>
                                        <span className={`${v?.paymentStatus === 'unpaid' ? 'bg-red-200 p-2 rounded-md text-red-500' : 'bg-green-200 p-2 rounded-md text-green-500'}`} >{v?.paymentStatus}</span>
                                    </TableCell>
                                    <TableCell >
                                        <span className={`${v?.orderStatus === 'pending' ? 'bg-red-200 p-2 rounded-md text-red-500' : v.orderStatus === 'confirmed' ? 'bg-blue-200 p-2 rounded-md text-blue-500' : 'bg-green-200 p-2 rounded-md text-green-600'}`}>{v?.orderStatus}</span>
                                    </TableCell>
                                    <TableCell className="inline-block ml-6" >{v?.totalQuantity}</TableCell>
                                    <TableCell >{moment(v?.createdAt).format('DD/MM/YYYY')}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>

        </section>
    );
};

export default page;