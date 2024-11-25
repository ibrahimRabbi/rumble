'use client'
import Filter from '@/components/Filter/Filter';
import Card from '@/components/ui/Card';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Rcategory from '@/app/responsive/Rcategory';



const page = () => {
    const searchParams = useSearchParams();
    const categoryName = searchParams.get('name')

    const [data, setData] = useState([])
    const [isChecked, setIsChecked] = useState('')



    useEffect(() => {
        fetch(`http://localhost:5000/api/products/get-products?category=${categoryName}`)
            .then(res => res.json())
            .then(res => setData(res?.response))

    }, [categoryName])



    const checkHandler = async (isChecked: boolean, value: any) => {
        if (isChecked) {
            const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products/product?category=${value.category}&subcategory=${value.subCategory}`)
            const { response } = await fetchingdata.json()
            setIsChecked(value.name)
            setData(response)
        }
    }



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
        console.log(gender)
        const fetching = await fetch(`http://localhost:5000/api/products/get-products?gender=${gender}`)
        const { response } = await fetching.json()
        setData([...response] as any)
    }




    return (
        <section className='min-h-screen  lg:my-10 my-3'>
            <Rcategory genderhandler={genderhandler} sorthandler={sorthandler} />
            <div className={`flex justify-between items-start mt-4 w-[90%] mx-auto`}>

                <div className='hidden lg:flex lg:w-[25%]'> <Filter genderhandler={genderhandler} isChecked={isChecked} sorthandler={sorthandler} checkHandler={checkHandler} /></div>
                 
                <Suspense fallback={<p className='text-3xl'>Loading....</p>}>
                    <div className='lg:w-[73%] grid grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            data?.slice(0, 8).map((data: any) => <Card key={Math.random()} data={data} />)
                        }
                    </div>
                </Suspense>
            </div>
        </section>
    );
};

export default page;