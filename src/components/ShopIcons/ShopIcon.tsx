'use client'
import Filter from '../Filter/Filter';
import Title from '../ui/Title';
import Card from '../ui/Card';




const ShopIcon = async () => {

    const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products`)
    const { response } = await fetchingdata.json()

    const checkHandler = (isChecked: boolean, value: string) => {
        console.log(isChecked,value)
    }

    return (
        <section className='w-[90%] mx-auto my-20'>
            <Title title='Shop our Icon' description='shop our recommended products' />
            
            <div className={`flex justify-between items-start my-6`}>
                <div className='w-[25%]'> <Filter checkHandler={checkHandler} /></div>

                <div className='w-[73%] grid grid-cols-4 gap-5'>
                    {
                        response.slice(0, 8).map((data: any) => <Card key={Math.random()} data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShopIcon;