import Title from '@/components/ui/Title';
import { Suspense } from 'react';
import Products from './_products/Products';
 

const NewArrival = async () => {

    return (
        <section className='w-[90%] mx-auto lg:mt-20 mt-16'>
            <Title title='New Arrival' description='recent stock and new arrival items' />
            <Suspense fallback={<p>loading</p>}>
                <Products />
            </Suspense> 
        </section>
    );
};

export default NewArrival;