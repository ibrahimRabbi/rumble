'use client'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import { baseApi } from './api/baseApi'
import { shippingSlice } from './features/shippingSlice'


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        delivary:shippingSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch