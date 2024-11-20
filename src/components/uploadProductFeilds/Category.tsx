'use client'
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { categories, subCategories } from '@/utils/Tools';



const Category = ({ seleteCategory, setSelectCategory, setSubCategory }: { seleteCategory: string, setSelectCategory: any, setSubCategory:any }) => {
 
   

    return (
        <div className='flex gap-5 justify-between mt-5'>

            <div className='w-[50%]'>
                <Select onValueChange={(value)=>setSelectCategory(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder='catecory' />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            categories?.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
            </div>

            <div className='w-[50%]'>
                <Select onValueChange={(v)=>setSubCategory(v)} disabled={seleteCategory !== ''? false:true}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder='sub category' />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            subCategories?.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                        }
                    </SelectContent>
                </Select> 
            </div>

        </div>
    );
};

export default Category;