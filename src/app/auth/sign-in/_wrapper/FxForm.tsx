'use client'
import { useSignInMutation } from "@/redux/api/baseApi";
import { setCookie } from "cookies-next/client";
import { redirect, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

 

const FxForm = ({ children, redirect }: { children: ReactNode, redirect:string|null} ) => {
    
    const formTools = useForm()
    const [signin] = useSignInMutation()
    const router = useRouter()

    const signInhandler = async (value: any) => {
        const response = await signin(value).unwrap()
        if (!response.success) {
            toast.error(response.message)
        } else {
            toast.success('Sign-In Successfully')
            setCookie('accessToken', response.accessToken)
           router.push(`${redirect}`)
        }
    }
    

    return (
        <FormProvider {...formTools}>
            <form onSubmit={formTools.handleSubmit(signInhandler)} className='lg:w-1/2 w-[90%] m-auto mt-10'>
            {children}
            </form>
        </FormProvider>
    );
};

export default FxForm;