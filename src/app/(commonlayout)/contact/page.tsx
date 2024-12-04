'use client'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { PiMessengerLogo } from "react-icons/pi";
import { useForm } from "react-hook-form"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { RiCustomerService2Line } from "react-icons/ri";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FiSend } from "react-icons/fi";
import { Button } from '@/components/ui/button';



const Contact = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const form = useRef()
   

    const submit = (data:any) => {
        const { subject, email, message } = data
        emailjs.sendForm("service_6f4zn7s", "template_s41gfcw", '1i82K5U5J2626tuR8')
            .then((res:any) => {
                if (res.status === 200) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your email has been send",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                }
            })

    }



    return (
        <section className="lg:w-[50%] min-h-screen lg:my-12 my-10 w-[90%] mx-auto">
            <p className='text-2xl font-semibold text-green-950 text-center'>Contact with us via </p>

            <div className="w-[70%] mx-auto flex flex-wrap justify-center items-start gap-5 mt-5">

                <button className=" hover:bg-green-100 py-2 px-7 border border-[#dfc9bb] flex items-center gap-2 rounded-lg">
                    <RiCustomerService2Line className="text-[24px] text-green-700 mx-auto" />
                    <span className="text-[16px] font-semibold text-zinc-800">Rumble Assistant</span>
                </button>

                <Link href='https://wa.me/01309785530' target='_blank' className="hover:bg-green-100 py-2 px-10 border border-[#dfc9bb] flex items-center gap-2 rounded-lg">
                    <FaWhatsapp className="text-[24px] text-green-700 mx-auto" />
                    <span className="text-[16px] font-semibold text-zinc-800">WhatsApp</span>
                </Link>

                <Link href='https://m.me/rumble.wears' target='_blank' className=" py-2 px-12 border border-[#dfc9bb] flex items-center gap-2 rounded-lg hover:bg-green-100">
                    <PiMessengerLogo className="text-[24px] text-sky-600 mx-auto" />
                    <span className="text-[16px] font-semibold text-zinc-800">Messenger</span>
                </Link>
            </div>

            <div className='divider w-[70%] mx-auto mt-10'>or</div>



            <form onSubmit={handleSubmit(submit)} className='w-[85%] mx-auto mt-10 space-y-6'>

                <label className="form-control w-full  ">
                    <span className="label-text">describe your issue shortly*</span>
                    <Input
                        type="text"
                        placeholder='type your issue'
                        className="input input-bordered w-full  "
                        {...register('email', { required: true })}
                    />
                    {errors.email?.type == 'required' && (<p className='text-red-600'>email in requird</p>)}
                </label>

                <label className="form-control">
                    <span className="label-text">elaborate your issue*</span>
                    <Textarea
                        placeholder='type here'
                        className="textarea textarea-bordered w-full"
                        {...register('message', { required: true, maxLength: 600 })}
                    ></Textarea>
                    {errors.message?.type == 'required' && (<p className='text-red-600'>please describe us your issue in details</p>)}
                    {errors.message?.type == 'maxLength' && (<p></p>)}
                </label>

                <Button className='bg-green-500 w-full hover:bg-green-600 mt-5' type="submit" >
                    <FiSend />
                    Send
                </Button>
            </form>

        </section>
    );
};

export default Contact;