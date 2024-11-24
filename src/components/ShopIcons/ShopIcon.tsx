'use client'
import Filter from '../Filter/Filter';
import Title from '../ui/Title';
import Card from '../ui/Card';
import { useEffect, useState } from 'react';



const ShopIcon = () => {

    const [data, setData] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/get-products?limit=12`)
            .then(res => res.json())
            .then(res => setData(res?.response))

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


    const checkHandler = async (isChecked: boolean, value: any) => {
        if (isChecked) {
            const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products/product?category=${value.category}&subcategory=${value.subCategory}`)
            const { response } = await fetchingdata.json()
            setData(response)
            setIsChecked(value.name)
        }
    }

    return (
        <section className='w-[90%] mx-auto my-20'>
            <Title title='Shop our Icon' description='shop our recommended products' />
            
            <div className={`flex justify-between items-start my-6`}>
                <div className='w-[25%]'> <Filter isChecked={isChecked} sorthandler={sorthandler} checkHandler={checkHandler} /></div>

                <div className='w-[73%] grid grid-cols-4 gap-8'>
                    {
                        data?.map((data: any) => <Card key={Math.random()} data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShopIcon;