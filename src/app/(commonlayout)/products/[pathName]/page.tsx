'use client'
import Filter from "@/components/Filter/Filter";
import Rcategory from "@/components/responsive/Rcategory";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";



const page = () => {

    const query = useSearchParams()
    const path = useParams()


    const queryData = query.get('value')
    console.log(queryData)
    const [data, setData] = useState([])
    const [isChecked, setIsChecked] = useState('')




    useEffect(() => {
        if (path.pathName === 'search' && queryData) {
            fetch(`http://localhost:5000/api/products/get-products?search=${queryData}`)
                .then(res => res.json())
                .then(res => setData(res?.response))
        }
        if (path.pathName === 'category' && queryData) {
            fetch(`http://localhost:5000/api/products/get-products?category=${queryData}`)
                .then(res => res.json())
                .then(res => setData(res?.response))
        }

      if(!queryData) {
            fetch(`http://localhost:5000/api/products/get-products?limit=12`)
                .then(res => res.json())
                .then(res => setData(res?.response))
        }

    }, [queryData,path.pathName])


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

        if (value === 'relevance') {
            const initalValue = data.sort()
            setData([...initalValue])
        }

        if (value === 'rating') {
            const initalValue = data.sort()
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

                <div className='hidden lg:block lg:w-[25%]'> <Filter genderhandler={genderhandler} isChecked={isChecked} sorthandler={sorthandler} checkHandler={checkHandler} /></div>

                <Suspense fallback={<p className='text-3xl'>Loading....</p>}>
                    {
                        data?.length < 1 ?
                            <div className='lg:w-[72%] mt-28 items-center flex justify-center flex-col gap-2'>
                            <div className='text-xl flex font-semibold text-zinc-800'>did not find products <span> ☹️</span></div>
                            <Link href='/products/search' className='bg-green-400 p-2 rounded-md border hover:bg-green-500 font-semibold text-zinc-800'>See All</Link>
                        </div> :
                            <div className='lg:w-[72%] grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                {
                                    data?.map((data: any) => <Card key={Math.random()} data={data} />)
                                }
                            </div>
                    }

                </Suspense>
            </div>
        </section>
    );
};

export default page;