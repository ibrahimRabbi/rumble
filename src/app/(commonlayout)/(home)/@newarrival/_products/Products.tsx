import Card from '@/components/ui/Card';
import React from 'react';

const Products = async () => {
    const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products?newArrival=true&limit=10`)
    const { response } = await fetchingdata.json()
    return (
         
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-10 mt-6'>
                {
                    response.map((data: any) => <Card key={data?._id} data={data} />)
                }
            </div>
         
    );
};

export default Products;