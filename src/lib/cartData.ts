'use client'
import { Tcart } from "@/components/cart/AddToCartBtn";
import { useGetCartQuery, useGetUserQuery } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hook";




const cartData = () => {

    const { data: user } = useGetUserQuery({})
    const { data, refetch, isLoading } = useGetCartQuery(user?.response?.email)
    const delivaryCharge = useAppSelector(state => state.delivary.delivaryCharge)

    let totalQuantity = 0
    let amount = 0
    let discount = 0;
    let subTotal = 0
    let vat = 0





    data?.response?.forEach((v: Tcart) => {
        totalQuantity += v.quantity
        amount += v.quantity * v.productId?.price
    })

    if (amount > 0) {
        subTotal = (amount + delivaryCharge) - discount
    }



    return { data, refetch, isLoading, totalQuantity, amount, discount, subTotal, delivaryCharge, vat }

};

export default cartData;