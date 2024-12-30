'use client'
import toast from 'react-hot-toast';
import { useAddToCartMutation, useGetUserQuery } from '@/redux/api/baseApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { resetQuantity } from '@/redux/features/cartSlice';
import { Button } from '../ui/button';

export type Tcart = {
    email: string,
    productId: any,
    quantity: number,
    size: string,
    color: string
}


const AddToCartBtn = ({ price, id, stock }: { price: number, id: string, stock: number }) => {
    const path = usePathname()
    const router = useRouter()

    const { data: user } = useGetUserQuery({})
    const [addToCart, { isLoading, }] = useAddToCartMutation()
    const { color, quantity, size } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()


    const data: Tcart = {
        email: user?.response?.email,
        productId: id,
        color, quantity, size
    }

    const addToCartHandler = async () => {
        if (!user.success) {
            toast.error('unauthorized user please login', { duration: 3000 })
            router.push(`/auth/sign-in?redirect=${path}`)
        } else {
            if (color === '' || size === '') {
                toast.error(' please select product color & size')
            } else {
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
    }


    const buyNowHandler = () => {
        if (!user.success) {
            router.push(`/auth/sign-in?redirect=${path}`)
        } else {
            if (color === '' || size === '') {
                toast.error(' please select product color & size')
            } else {
                router.push(`/shipping-address?id=${id}&price=${price}`)
            }
        }
    }


    return (
        <div className="flex gap-8 lg:mt-12 mt-5 items-center">
            <button onClick={addToCartHandler} className={`p-3 ${stock < 1 ? 'btn-disabled' : 'enabled:'} hover:bg-zinc-950 uppercase text-white font-semibold bg-zinc-900 text-sm w-[45%]`}>Add To Cart</button>
            <button onClick={buyNowHandler} className={`p-3 text-sm hover:bg-amber-500 font-semibold uppercase bg-amber-400 text-slate-900 w-[45%] ${stock < 1 ? 'btn-disabled' : 'enabled:'}`}>Buy Now</button>
        </div>
    );
};

export default AddToCartBtn;