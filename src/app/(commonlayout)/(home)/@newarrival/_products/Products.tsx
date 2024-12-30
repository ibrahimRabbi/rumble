import Card from '@/components/ui/Card';
import { Suspense, } from 'react';





const Products = async () => {

    const fetching = await fetch(` http://localhost:5000/api/products/get-products/?newArrival=true&limit=10`)
    const data = await fetching.json()



    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-6 mt-6'>
            <Suspense fallback={<p>loading...</p>}>
                {
                    data?.response?.map((data: any) => <Card key={data?._id} data={data} />)
                }
            </Suspense>
        </div>

    );
};

export default Products;