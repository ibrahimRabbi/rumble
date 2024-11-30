'use client'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartState {
    color: string,
    size: string,
    quantity: number,
}

const initialState: CartState = {
    color: '',
    size: '',
    quantity: 1,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
        colorHandler: (state, payload: PayloadAction) => {
            state.color = payload.payload as any
        },

        sizeHandler: (state, payload: PayloadAction) => {
            state.size = payload.payload as any
        },

        increment: (state) => {
            if (state.quantity > 9) {
                 state.quantity = 10
            } else {
                state.quantity = state.quantity + 1
            }   
        },
        
        dicrement: (state) => {
            if (state.quantity <= 1) {
                state.quantity = 1
            } else {
                state.quantity = state.quantity - 1
            }
        },

        resetQuantity: (state, payload) => {
            state.quantity = payload.payload as number
        }

         

    },
})


export const { colorHandler, sizeHandler, increment, dicrement,resetQuantity} = cartSlice.actions

export default cartSlice.reducer