import React, { ReactNode, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import toast from 'react-hot-toast';
import { colors } from '@/utils/Tools';
import { RxCross2 } from "react-icons/rx";


const Color = ({color,setColor}:{color:any, setColor:any}) => {

    

    const colorHandler = (value: string) => {
        if (color.includes(value as never)) {
            toast.error('this color already picked')
        } else {
            setColor((prev:any) => [...prev, value] as any)
        }

    }

    const deleteColor = (value: string) => {

        const deleteData = color.filter((v:string) => value !== v)
        setColor(deleteData)
    }




    return (
        <div>
            <Select onValueChange={colorHandler}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder='Select color' />
                </SelectTrigger>
                <SelectContent>
                    {
                        colors?.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                    }
                </SelectContent>
            </Select>

            <div className='flex items-center gap-2 mt-2'>
                {
                    color.map((v:string) => {
                        return (
                            <div key={Math.random()} className='bg-green-200 border p-2 rounded-md flex items-center gap-1'>
                                <p key={Math.random()} >{v}</p>
                                <RxCross2 onClick={() => deleteColor(v)} />
                            </div>
                        )
                        
                    } )
                }
            </div>
        </div>
    );
};

export default Color;