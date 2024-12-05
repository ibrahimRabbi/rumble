import HotProducts from './_style&compo/hotProducts';
 

const HotDeal = () => {

 

    return (
        <section className='lg:mt-16 mt-6 lg:w-[97%] w-[90%] mx-auto'>
            <div className='lg:w-[50%] lg:ml-12'>
                <p className='text-2xl font-semibold'>Hot Deals</p>
                <p className='text-sm text-zinc-600'>here has a displayed offer and combo deal</p>
            </div> 
             <HotProducts/>
        </section>
    );
};

export default HotDeal;