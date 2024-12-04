'use client'
import { Suspense, useEffect, useState } from 'react';
import Title from '@/components/ui/Title';
import Filter from '@/components/Filter/Filter';
import Card from '@/components/ui/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Products from './_component/Products';



const ShopIcon = () => {

    const [data, setData] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isLoading, setloading] = useState(false)


    useEffect(() => {
        setloading(true)
        fetch(`http://localhost:5000/api/products/get-products?limit=12`)
            .then(res => res.json())
            .then(res => {
                setData(res?.response)
                setloading(false)
            })

    }, [])




    const sorthandler = (value: string) => {

        if (value === 'High price') {
            const initalValue = data.sort((a: any, b: any) => b.price - a.price)
            setData([...initalValue])
            console.log(initalValue)
        }

        if (value === 'Low price') {
            const initalValue = data.sort((a: any, b: any) => a.price - b.price)
            setData([...initalValue])
        }

        if (value === 'relevence') {
            const initalValue = data.sort()
            setData([...initalValue])
        }

        if (value === 'relevence') {
            const initalValue = data.sort((a: any, b: any) => a.createdAt - b.createdAt)
            setData([...initalValue])
        }

        if (value === 'new Arrival') {
            const initalValue = data.reverse()
            setData([...initalValue])
        }
    }

    const genderhandler = async (gender: string) => {
        const fetching = await fetch(`http://localhost:5000/api/products/get-products?gender=${gender}`)
        const { response } = await fetching.json()
        setData([...response] as any)
    }


    const checkHandler = async (isChecked: boolean, value: any) => {
        setloading(true)
        if (isChecked) {
            const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products/product?category=${value.category}&subcategory=${value.subCategory}`)
            const { response } = await fetchingdata.json()
            setData(response)
            setIsChecked(value.name)
            setloading(false)
        }
    }




    return (
        <section className='w-[90%] mx-auto my-20'>
            <Title title='Shop our Icon' description='shop our recommended products' />

            <div className='mt-7 lg:hidden flex justify-end items-center'>
                <p>Sort By :</p>
                <Select onValueChange={(value: string) => sorthandler(value)}>
                    <SelectTrigger className="w-[30%]">
                        <SelectValue placeholder='Relevance' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="new Arrival">New Arrival</SelectItem>
                        <SelectItem value="Low price">price (Low To High)</SelectItem>
                        <SelectItem value="High price">price (High To Low)</SelectItem>
                        <SelectItem value="Rating">Rating</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className={`flex justify-between items-start mt-2 lg:mt-6`}>
                <div className='lg:w-[25%] hidden lg:block'>
                    <Filter genderhandler={genderhandler} isChecked={isChecked} sorthandler={sorthandler} checkHandler={checkHandler} />
                </div>

                <Products data={data} loading={isLoading} />

            </div>
        </section>
    );
};

export default ShopIcon;