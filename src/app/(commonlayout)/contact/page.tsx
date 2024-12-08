'use client'
import { FaWhatsapp } from 'react-icons/fa';
import { PiMessengerLogo } from "react-icons/pi";
import { useRef, useState } from 'react';
import Link from 'next/link';
import { RiCustomerService2Line } from "react-icons/ri";
import { useCallRequestMutation, useGetUserQuery } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';
import ConfirmDialog from '@/components/confirmationDialog/ConfirmDialog';
import Email from './_component/Email';




const Contact = () => {

    const [callRequest] = useCallRequestMutation()
    const { data: user } = useGetUserQuery({})
    const form = useRef()
    const [isOpen, setOpen] = useState(false)
    const [title, setTitle] = useState('Call request sent successfully')
    const [description, setDis] = useState('We have recevied your call request. we will respond to you within 30 minutes, Thank you.')


    const assistantHandler = async () => {
        const response = await callRequest(user?.response?._id).unwrap()

        if (response.success) {
            setOpen(true)
        } else {
            toast.error(response?.message)
        }

    }


    return (
        <section className="lg:w-[50%] min-h-screen lg:my-12 my-10 w-[90%] mx-auto">
            <p className='text-2xl font-semibold text-green-950 text-center'>Contact with us via </p>

            <div className="w-[70%] mx-auto flex flex-wrap justify-center items-start gap-5 mt-5">

                <button onClick={assistantHandler} className=" hover:bg-green-100 py-2 px-7 border border-[#dfc9bb] flex items-center gap-2 rounded-lg">
                    <RiCustomerService2Line className="text-[24px] text-green-700 mx-auto" />
                    <span className="text-[16px] font-semibold text-zinc-800">Rumble Assistant</span>
                </button>

                <Link href='https://wa.me/01309785530' target='_blank' className="hover:bg-green-100 py-2 px-12 border border-[#dfc9bb] flex items-center gap-2 rounded-lg">
                    <FaWhatsapp className="text-[24px] text-green-700 mx-auto" />
                    <span className="text-[16px] font-semibold text-zinc-800">WhatsApp</span>
                </Link>

                <Link href='https://m.me/rumble.wears' target='_blank' className=" py-2 px-12 border border-[#dfc9bb] flex items-center gap-2 rounded-lg hover:bg-green-100">
                    <PiMessengerLogo className="text-[24px] text-sky-600 mx-auto" />
                    <span className="text-[16px] font-semibold text-zinc-800">Messenger</span>
                </Link>
            </div>

            <div className='divider w-[70%] mx-auto mt-10'>or</div>

            <Email setTitle={setTitle} setDis={setDis} setOpen={setOpen}  />

            <ConfirmDialog isOpen={isOpen as boolean} setOpen={setOpen} title={title} description={description} />
            
        </section>
    );
};

export default Contact;