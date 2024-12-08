'use client'
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { RxCross2 } from "react-icons/rx";



const Spacification = ({ specifics, setSpecifics }: { specifics:any, setSpecifics:any }) => {

    const [specific, setspecific] = useState('')
   

    const addSpacifichandler = () => {
        setSpecifics((prev:any) => [...prev, specific] as any)
        setspecific('')
    }


    const deleteSpacific = (value: string) => {
        const deleteData = specifics.filter((v:string) => value !== v)
        setSpecifics(deleteData)
    }





    return (
        <div className='mt-4'>
            <div className='relative'>
                <Input value={specific} onChange={e => setspecific(e.target.value)} className='absolute' placeholder="Specifications" />
                <div onClick={addSpacifichandler} className={`absolute right-2 top-2 ${specific == '' ? 'btn-disabled text-slate-400' : 'visible cursor-pointer'} text-green-600 font-semibold`}>Add</div>
            </div>
            <div className='pt-12 space-y-2'>
                {
                    specifics.map((v:string,index:number) => {
                        return (
                            <div key={index+1} className='bg-green-200 text-black space-x-5 p-2 rounded-md flex items-center justify-between'>
                                <p  className=''>{v}</p>
                                <RxCross2 onClick={() => deleteSpacific(v)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Spacification;