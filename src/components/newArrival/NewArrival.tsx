import React from 'react';
import Title from '../ui/Title';
import Card from '../ui/Card';




const NewArrival = async () => {

    const fetchingdata = await fetch("http://localhost:3000/product.json", { cache: 'no-store' })
    const response = await fetchingdata.json()


    return (
        <section className='w-[90%] mx-auto mt-20'>
            <Title title='New Arrival' description='recent stock and new arrival items' />

            <div className='grid grid-cols-5 gap-10 mt-6'>
                {
                    response.map((data: any) => <Card key={Math.random()} data={data}/>)
                }
            </div>
        </section>
    );
};

export default NewArrival;