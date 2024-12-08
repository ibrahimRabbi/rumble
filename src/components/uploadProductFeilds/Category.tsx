'use client'
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { categoryData } from '@/utils/Tools';



const Category = ({ seleteCategory, setSelectCategory, setSubCategory }: { seleteCategory: string, setSelectCategory: any, setSubCategory:any }) => {
 
    const [subcategoriesData,setSubCategoriesData] = useState([])
   
    
    const categoryHandler = (value:string) => {
        setSelectCategory(value)
        const find = categoryData.find(v => v.category === value)
        setSubCategoriesData(find?.subCategories as any )
    }

    return (
        <div className='flex gap-5 justify-between mt-5'>

            <div className='w-[50%]'>
                <Select onValueChange={(value)=>categoryHandler(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder='catecory' />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            categoryData?.map((v,index) => <SelectItem key={index+1} value={v.category}>{v.category}</SelectItem>)
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
                            subcategoriesData?.map((v,index) => <SelectItem key={Math.random().toString().split('.')[1]} value={v}>{v}</SelectItem>)
                        }
                    </SelectContent>
                </Select> 
            </div>

        </div>
    );
};

export default Category;