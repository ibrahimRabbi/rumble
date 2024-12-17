'use client'
import "react-image-gallery/styles/css/image-gallery.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Increment from "@/components/viewDetails/Increment";
import Size from "@/components/viewDetails/Size";
import ImageGallry from "@/components/viewDetails/imageGallry";
import Color from "@/components/viewDetails/Color";
import AddToCartBtn from "@/components/cart/AddToCartBtn";
import { useParams } from "next/navigation";
import { useGetSingleDataQuery } from "@/redux/api/baseApi";
 




const SingleData =  () => {
    const params = useParams()
    const {data} = useGetSingleDataQuery(params?.viewDetails)
            
   

    return (
        <section>
            <div className="lg:w-[90%] w-[95%] lg:gap-16 gap-5 mx-auto mt-10 pb-20 grid lg:grid-cols-2 grid-cols-1">

                <ImageGallry coverPhoto={data?.response?.coverPhoto} detailPhoto={data?.response?.detailPhoto} />
                <div className='mt-5'>
                    <p className="text font-semibold text-2xl text-zinc-700">{data?.response?.title}</p>
                    <p className="mt-2 text-zinc-500 text-[0.825rem]">{data?.response?.description}</p>
                    <div className='flex mt-7 items-center justify-between'>
                        <Increment />
                        <p className='font-semibold mt-5 text-[17px] text-zinc-700'>Available Stock- {data?.response?.stock > 0 ? data?.response?.stock : <span className='text-red-600'>Sold Out</span>}</p>
                       
                    </div>
                    <Size sizes={data?.response?.sizes} />
                    <Color colors={data?.response?.colors} />
                    <div className="mt-7">
                        <p className="font-semibold text-[17px] text-zinc-800">Product Specifications : </p>
                        <ul className='list-disc font-semibold text-zinc-600 text-sm ml-5 mt-1'>
                            {
                            data?.response?.spacifications?.map((v: string,index:number) => <li key={index+1}>{v}</li>)
                             }
                        </ul>
                    </div>
                    
                    <div className="flex lg:mt-10 mt-5 justify-between items-center lg:pr-12">
                        <p className="text font-semibold text-2xl text-[#613d26]">
                            {data?.response?.price}-TK
                        </p>
                        <Rating style={{ maxWidth: 110 }} value={4} />
                    </div>

                    <div className="divider"></div>
                    <AddToCartBtn price={data?.response?.price} id={params?.viewDetails as string} stock={data?.response?.stock} />
                </div>
            </div>

        </section>
    )
};

export default SingleData;