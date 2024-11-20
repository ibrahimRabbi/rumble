import Filter from '@/components/Filter/Filter';
import Card from '@/components/ui/Card';


const page = async () => {

    const fetchingdata = await fetch("http://localhost:5000/api/products/get-products")
    const { response } = await fetchingdata.json()


    return (
        <section className='w-[90%] mx-auto my-10'>

            <div className={`flex justify-between items-start`}>
                <div className='w-[25%]'><Filter /></div>
                <div className='w-[73%] grid grid-cols-4 gap-10'>
                    {
                        response?.map((data: any) => <Card key={Math.random()} data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default page;