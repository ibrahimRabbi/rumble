import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import toast from 'react-hot-toast';
import { sizePreferences } from '@/utils/Tools';
import { useForm } from 'react-hook-form';
import { RxCross2 } from "react-icons/rx";

const SizePreferance = ({ selectedsize, setSelectedSize }: { selectedsize:any, setSelectedSize:any }) => {

    const [sizePreference, setSizePreference] = useState('')
    const [sizes, setSizes] = useState([])

    const { formState: { errors } } = useForm()
    

    const sizehandler = (value: string) => {
        setSizePreference(value)
        const finding = sizePreferences.find(v => value === v.type)
        setSizes(finding?.sizes as any)
    }


    const selectedsizehandler = (value: string) => {

        if (selectedsize.includes(value as never)) {
            toast.error('sized already picked')
        } else {
            setSelectedSize((prev: any) => [...prev, value] as any)
        }

    }


    const deleteSize = (value: string) => {

        const deleteData = selectedsize.filter((v: string) => value !== v)
        setSelectedSize(deleteData)
    }






    return (
        <div className='flex gap-5 justify-between mt-5'>
            <div className='w-[50%]'>
                <Select onValueChange={sizehandler}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder='Size preference' />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            sizePreferences?.map(v => <SelectItem key={Math.random()} value={v.type}>{v.type}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
                {sizePreference === '' ? <p className='text-red-500 text-sm'>size preference is required</p> : ''}
            </div>

            <div className='w-[50%]'>
                <Select disabled={sizePreference === '' ? true : false} onValueChange={selectedsizehandler}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder='Size preference' />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            sizes?.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
                {errors.gender?.type === 'required' && <p className='text-red-500 text-sm'>gender is required</p>}

                <div className='flex items-center gap-2 mt-2'>
                    {
                        selectedsize.map((v: string) => {
                            return (
                                <div key={Math.random()} className='bg-green-200 border p-2 rounded-md flex items-center gap-2'>
                                    <p key={Math.random()} >{v}</p>
                                    <RxCross2 onClick={() => deleteSize(v)} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default SizePreferance;