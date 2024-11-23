'use client'
import Filter from '@/components/Filter/Filter';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

 

const page = async ({ searchParams }: { searchParams: { name: string, subCategory:string } }) => {
    const categoryName = searchParams?.name 
     const router = useRouter()
 
    const fetchingdata = await fetch(`http://localhost:5000/api/products/get-products?category=${categoryName}&subcategory=${searchParams.subCategory}`)
    const { response } = await fetchingdata.json()





    const checkHandler = async (isChecked:boolean,value:any) => {
         
        if (isChecked) {
            router.push(`/category?name=${value.category}&subCategory=${value.subCategory}`)
        }
    }

     

    return (
        <section className='min-h-screen w-[90%] mx-auto my-10'>
            <div className={`flex justify-between items-start`}>

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

export default page;