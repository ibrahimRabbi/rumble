import { Tcart } from '@/components/cart/AddToCartBtn'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from 'cookies-next/client'

//https://rumble-server.vercel.app/api
//  http://localhost:5000


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = getCookie('accessToken')
            headers.set('authorization', token as string)
            headers.set('Content-Type', 'application/json')
        }
    }),
    tagTypes: ['product', 'cart', 'auth', 'order'],
    endpoints: (builder) => ({

        getSingleData: builder.query({
            query: (id) => {
                return {
                    url: `/products/get-products?id=${id}`
                }
            },
            providesTags: ['product']
        }),

        addProduct: builder.mutation({
            query: (payload) => {
                return {
                    url: '/products/insert-product',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['product']
        }),

        getSubProduct: builder.query({
            query: (payload) => {
                return {
                    url: `products/get-products?category=${payload}`
                }
            }
        }),

        newArrivalProduct: builder.query({
            query: () => {
                return {
                    url: `products/get-products?newArrival=true&limit=10`
                }
            },
            providesTags: ['product']
        }),

        addToCart: builder.mutation({
            query: (payload: Tcart) => {
                return {
                    url: '/cart/insert-cart',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['cart']
        }),

        getCart: builder.query({
            query: (email) => {
                return {
                    url: `/cart/get-cart?email=${email}`
                }
            },
            providesTags: ['cart']
        }),

        deleteCart: builder.mutation({
            query: (id: string) => {
                return {
                    url: `/cart/delete/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['cart']
        }),

        signUp: builder.mutation({
            query: (payload) => {
                return {
                    url: '/sign-up',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['auth']
        }),

        signIn: builder.mutation({
            query: (payload) => {
                return {
                    url: '/auth/sign-in',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['auth']
        }),

        getUser: builder.query({
            query: () => {
                return {
                    url: '/get-user',
                }
            },
            providesTags: ['auth']
        }),

        addNewAddress: builder.mutation({
            query: (payload) => {
                return {
                    url: `/update-user`,
                    method: 'PATCH',
                    body: payload
                }
            },
            invalidatesTags: ['auth']
        }),

        deleteAddress: builder.mutation({
            query: (payload) => {
                return {
                    url: '/delete-address',
                    method: 'PATCH',
                    body: payload
                }
            },
            invalidatesTags: ['auth']
        }),
        createOrder: builder.mutation({
            query: (payload) => {
                return {
                    url: '/order/create-order',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['order']
        }),
        getOrder: builder.query({
            query: () => {
                return {
                    url: '/order/get-order',
                }
            },
            providesTags: ['order']
        }),

        callRequest: builder.mutation({
            query: (userId) => {
                return {
                    url: '/request/insert-call',
                    method: 'POST',
                    body: { user: userId }
                }
            }
        })


    }),
})


export const { useAddProductMutation, useNewArrivalProductQuery, useGetSubProductQuery, useAddToCartMutation, useDeleteCartMutation, useGetCartQuery, useSignUpMutation, useSignInMutation, useGetUserQuery, useAddNewAddressMutation, useDeleteAddressMutation, useCreateOrderMutation, useGetOrderQuery, useGetSingleDataQuery, useCallRequestMutation } = baseApi