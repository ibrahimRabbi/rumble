'use client'
import Filter from '../Filter/Filter';
import Title from '../ui/Title';
import Card from '../ui/Card';
import { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';



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

    const genderhandler = async (gender: string) => {
        const fetching = await fetch(`http://localhost:5000/api/products/get-products?gender=${gender}`)
        const { response } = await fetching.json()
        setData([...response] as any)
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
            
            <div className='mt-7 lg:hidden flex justify-end items-center'>
                <p>Sort By :</p>
                <Select onValueChange={(value) => sorthandler(value)}>
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
                <div className='lg:w-[25%] hidden lg:flex'> <Filter genderhandler={genderhandler} isChecked={isChecked} sorthandler={sorthandler} checkHandler={checkHandler} /></div>

                <div className='lg:w-[73%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        data?.map((data: any) => <Card key={Math.random()} data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShopIcon;