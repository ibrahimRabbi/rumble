import Card from '@/components/ui/Card';
import Link from 'next/link';




const Displayed = ({ data, isLoading }: { data: any, isLoading: boolean }) => {

    if (isLoading) {
        return <div className='lg:w-[72%] w-[95%]'>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 ">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => {
                        return (
                            <div key={v} className="flex flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    }

    

    return (
        <>
            {
                data?.length < 1 ?
                    <div className='lg:w-[72%] w-[95%] mt-28 items-center flex justify-center flex-col gap-2'>
                        <div className='text-xl flex font-semibold text-zinc-800'>did not find products <span> ☹️</span></div>
                        <Link href='/products/search' className='bg-green-400 p-2 rounded-md border hover:bg-green-500 font-semibold text-zinc-800'>See All</Link>
                    </div> :
                    <div className='lg:w-[72%] grid grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            data?.map((data: any) => <Card key={Math.random()} data={data} />)
                        }
                    </div>
            }
        </>
    );
};

export default Displayed;