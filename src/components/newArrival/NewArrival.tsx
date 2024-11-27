import React, { Suspense } from 'react';
import Title from '../ui/Title';
import Card from '../ui/Card';




const NewArrival = async () => {

    const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products?newArrival=true&limit=10`)
    const { response } = await fetchingdata.json()



    return (
        <section className='w-[90%] mx-auto lg:mt-20 mt-16'>
            <Title title='New Arrival' description='recent stock and new arrival items' />

            <Suspense fallback={<p className='text-3xl'>Loading....</p>}>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-10 mt-6'>
                    {
                        response.map((data: any) => <Card key={Math.random()} data={data} />)
                    }
                </div>
            </Suspense>
        </section>
    );
};

export default NewArrival;