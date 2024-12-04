'use client'
import Filter from "@/components/Filter/Filter";
import Rcategory from "@/components/responsive/Rcategory";
import { useSearchParams, useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Displayed from "./_dataDisplayed/Displayed";



const page = () => {

    const query = useSearchParams()
    const path = useParams()


    const queryData = query.get('value')
    
    const [data, setData] = useState([])
    const [isChecked, setIsChecked] = useState('')
    const [isLoading,setIsLoading] = useState(false)




    useEffect(() => {
        setIsLoading(true)
        if (path.pathName === 'search' && queryData) {
            fetch(`http://localhost:5000/api/products/get-products?search=${queryData}`)
                .then(res => res.json())
                .then(res => {
                    setData(res?.response)
                    setIsLoading(false)
                } )
        }
        if (path.pathName === 'category' && queryData) {
            fetch(`http://localhost:5000/api/products/get-products?category=${queryData}`)
                .then(res => res.json())
                .then(res => {
                    setData(res?.response)
                    setIsLoading(false)
                })
        }

      if(!queryData) {
            fetch(`http://localhost:5000/api/products/get-products?limit=12`)
                .then(res => res.json())
                .then(res => {
                    setData(res?.response)
                    setIsLoading(false)
                })
        }

    }, [queryData,path.pathName])


    const checkHandler = async (isChecked: boolean, value: any) => {
        setIsLoading(true)
        if (isChecked) {
            const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products/product?category=${value.category}&subcategory=${value.subCategory}`)
            const { response } = await fetchingdata.json()
            setIsChecked(value.name)
            setData(response)
            setIsLoading(false)
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
        setIsLoading(true)
        const fetching = await fetch(`http://localhost:5000/api/products/get-products?gender=${gender}`)
        const { response } = await fetching.json()
        setData([...response] as any)
        setIsLoading(false)
    }



    return (
        <section className='min-h-screen  lg:my-10 my-3'>
            <Rcategory genderhandler={genderhandler} sorthandler={sorthandler} />


            <div className={`flex justify-between items-start mt-4 w-[90%] mx-auto`}>

                <div className='hidden lg:block lg:w-[25%]'> <Filter genderhandler={genderhandler} isChecked={isChecked} sorthandler={sorthandler} checkHandler={checkHandler} /></div>
                <Suspense fallback={<p className='text-3xl text-center'>Loading....</p>}>
                    <Displayed data={data} isLoading={isLoading} />
                </Suspense>
            </div>
        </section>
    );
};

export default page;