'use client'
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import Spacification from '@/components/uploadProductFeilds/Spacification';
import Color from '@/components/uploadProductFeilds/Color';
import SizePreferance from '@/components/uploadProductFeilds/Sizepreferance';
import Category from '@/components/uploadProductFeilds/Category';
import { useAddProductMutation } from '@/redux/api/baseApi';
 







const UploadProduct = () => {

    const { register,reset, handleSubmit, formState: { errors } } = useForm()
    const [color, setColor] = useState([])
    const [specifics, setSpecifics] = useState([])
    const [selectedsize, setSelectedSize] = useState([])
    const [seleteCategory, setSelectCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
const [addProdcut,{isLoading}] = useAddProductMutation()
 
    const coverImageprocessor = async (file: any) => {
        const formData = new FormData()
        formData.append('image', file)
        const fatching = await fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
            method: 'POST',
            body: formData
        })
        const convert = await fatching.json()
        const img = await convert?.data?.image?.url
        return img
    }

 

    const submitHandler = async (value: any) => {
        const files = Object.values(value.morePhoto)

        const images = files.map(async (file: any) => {
            const formData = new FormData()
            formData.append('image', file)

            const fatching = await fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
                method: 'POST',
                body: formData
            })
            const convert = await fatching.json()
            const img = await convert?.data?.image?.url
            return img
        })


        const moreImages = await Promise.all(images);
        const coverPhoto = await coverImageprocessor(value?.coverPhoto[0])
        const productData = {
            title: value.title,
            price: parseInt(value.price),
            stock: parseInt(value.stock),
            category: seleteCategory.toLocaleLowerCase(),
            subCategory: subCategory.toLocaleLowerCase(),
            coverPhoto: coverPhoto,
            detailPhoto: moreImages,
            colors: color,
            sizes: selectedsize,
            spacifications: specifics,
            offer: 0,
            description: value.description
        }

         const response = await addProdcut(productData).unwrap()
         console.log(response)
        if (response.success) {
            reset()
            setSelectedSize([])
            setColor([])
            setSpecifics([])
            setSelectCategory('')
            setSubCategory('')
            toast.success('product has been uploaded successfully')
        } else {
            toast.error('something went worng')
        }
 
    }


    if (isLoading) {
        return <h1 className='text-xl flex justify-center items-center h-screen'>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit(submitHandler)} className='lg:mt-10 mt-14 lg:w-1/2 w-[90%] m-auto'>
                <p className='text-[#323232] text-center text-3xl font-[700]'>Upload New  Product</p>


                <div className='grid lg:grid-cols-2 gap-6 mt-5'>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='text'
                            {...register('title', { required: true, maxLength: 40 })} placeholder="Title" />
                        {errors.title?.type === 'required' && <p className='text-red-500 text-sm'>title is required</p>}
                        {errors.title?.type === 'maxLength' && <p className='text-red-500 text-sm'>title length too long</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='number'
                            {...register('price', { required: true, min: 50 })} placeholder="selling Price " />
                        {errors.price?.type === 'required' && <p className='text-red-500 text-sm'>price is required</p>}
                        {errors.price?.type === 'min' && <p className='text-red-500 text-sm'>price have to 50TK up</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='number' {...register('stock', { required: true, min: 1 })} placeholder="available stock" />
                        {errors.stock?.type === 'required' && <p className='text-red-500 text-sm'>stock is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' {...register('coverPhoto', { required: true })} placeholder="cover photo" type='file' />
                        {errors.coverPhoto?.type === 'required' && <p className='text-red-500 text-sm'>cover photo is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' {...register('morePhoto', { required: true })} placeholder="details photos" multiple type='file' />
                        {errors.morePhoto?.type === 'required' && <p className='text-red-500 text-sm'>please add multiple photo</p>}
                    </div>
                    <Color color={color} setColor={setColor} />
                </div>
                <SizePreferance selectedsize={selectedsize} setSelectedSize={setSelectedSize} />
                <Category setSubCategory={setSubCategory} seleteCategory={seleteCategory} setSelectCategory={setSelectCategory} />
                <Spacification specifics={specifics} setSpecifics={setSpecifics} />

                <div className='mt-5'>
                    <Textarea  {...register('description', { required: true })} placeholder="Description" />
                    {errors.description?.type === 'required' && <p className='text-red-500 text-sm'>description is required</p>}
                </div>

                <input type="submit" value='upload' className='bg-[#ECE64A] hover:bg-[#dfd936] p-2 mt-12 rounded-lg font-semibold lg:w-1/2 w-full mx-auto block' />
            </form>
        </section>
    );
};

export default UploadProduct;



