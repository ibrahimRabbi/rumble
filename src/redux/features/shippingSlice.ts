'use client'
import { createSlice} from "@reduxjs/toolkit"

interface Tshipping {
    delivaryCharge: number
}

const initialState: Tshipping = {
    delivaryCharge: 70
}

export const shippingSlice = createSlice({
    name: 'shipping',
    initialState,
    reducers: {
        changeDelivaryChrg: (state,payload) => {
            state.delivaryCharge = payload.payload
         }
    }

})

export const {changeDelivaryChrg } = shippingSlice.actions

export default shippingSlice.reducer