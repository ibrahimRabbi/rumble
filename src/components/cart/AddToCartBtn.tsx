'use client'
import toast from 'react-hot-toast';
import { useAddToCartMutation, useGetUserQuery } from '@/redux/api/baseApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import { resetQuantity } from '@/redux/features/cartSlice';
import { Button } from '../ui/button';

export type Tcart = {
    email: string,
    productId: any,
    quantity: number,
    size: string,
    color: string
}


const AddToCartBtn = ({ id, stock }: { id: string, stock:number }) => {

    const {data:user} = useGetUserQuery({})
    const [addToCart, { isLoading, }] = useAddToCartMutation()
    const { color, quantity, size } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const router = useRouter()

    

    const addToCartHandler = async () => {
        if (!user.success) {
            toast.error('unauthorized user please login',{duration:4000})
            router.push('/auth/sign-in')
        } else {
            const data: Tcart = {
                email: user?.response?.email,
                productId: id,
                color, quantity, size
            }
            const added = await addToCart(data).unwrap()

            if (added.success) {
                toast.success('item added successfully')
                dispatch(resetQuantity(1))
                router.push('/products/category')
            } else {
                toast.error(added?.message)
            }

        }
    }

    // if (isLoading) {
    //     return <h1 className='text-5xl'>Loading....</h1>
    // }



    // const buyNowHandler = () => {
    //     if (!user) {
    //         return navigate('/signin')
    //     } else {
    //         return navigate('/buynow', { state: productData })
    //     }
    // }




    return (
        <div className="flex gap-8 lg:mt-12 mt-5 items-center">
            <Button onClick={addToCartHandler} className={`p-2 btn ${stock<1? 'btn-disabled': 'enabled:'} hover:bg-red-700 rounded-lg text-white font-semibold bg-red-600 w-[45%]`}>Add To Cart</Button>
            <Button className={`p-2 btn  hover:bg-amber-500 rounded-lg font-semibold bg-amber-400 text-slate-900 w-[45%] ${stock < 1 ? 'btn-disabled' : 'enabled:'}`}>
                Buy Now
            </Button>
        </div>
    );
};

export default AddToCartBtn;