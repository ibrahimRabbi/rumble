'use client'
import AddDetailsDialog from "@/components/addDetailsDialog/AddDetailsDialog";
import { useDeleteAddressMutation, useGetUserQuery } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";


export type DeliverAddress = {
    name: string,
    phone: string,
    address: string,
    district: string,
    isSelect: boolean
}
 

const page = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [details, setDetails] = useState({})
    const [isChecked, setChecked] = useState(false)
    const { data: user, isLoading } = useGetUserQuery({})
    const [deleteaddress, { }] = useDeleteAddressMutation()
    const dispatch = useAppDispatch()




    const deleteHandler = async (value: DeliverAddress) => {
        const response = await deleteaddress(value).unwrap()
        if (response?.success) {
            toast.success('deleted successfully')
        }
    }


   

    return (
        <section>
            <div>
                <p className='text-2xl text-zinc-950 font-semibold'>My address</p>
                <p className='text-sm text-zinc-700'>address thats i use during order</p>
            </div>

            <div className='flex flex-col gap-3 mt-10 border p-8 shadow-md rounded-md'>
                {
                    user?.response?.deliverAddress?.map((v: DeliverAddress) => {
                        return (
                                <div key={Math.random()} className='flex items-center justify-between rounded-md bg-green-50 mt-3 p-3'>
                                    <div className='flex items-center gap-2'>

                                        <p className='font-semibold'>{v?.name}</p>
                                        <p className=''>{v?.phone}</p>

                                        <p className='lg:pl-4'>{v?.address}, <span>{v?.district}</span></p>
                                    </div>
                                    <button onClick={() => deleteHandler(v)} className='text-sky-600 underline'>Delete</button>
                                </div>
                                 

                        )
                    })
                }
            </div>

            <button onClick={() => setIsOpen(true)} className='flex gap-1 mt-7 items-center'>
                <IoMdAdd className='text-xl' />
                <p className='text-sky-600 text-[17px]'>Add New Details</p>
            </button>
            <AddDetailsDialog isOpen={isOpen} setIsOpen={setIsOpen} />

        </section>
    );
};

export default page;