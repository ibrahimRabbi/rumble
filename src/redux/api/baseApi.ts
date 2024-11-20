import { Tcart } from '@/components/cart/AddToCartBtn'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken')
            headers.set('authorization', token as string)
        }
    }),
    tagTypes: ['cart', 'auth'],
    endpoints: (builder) => ({

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
            invalidatesTags:['auth']
        }),

        deleteAddress: builder.mutation({
            query: (payload) => {
                return {
                    url: '/delete-address',
                    method: 'PATCH',
                    body : payload
                }
            },
            invalidatesTags: ['auth']
        })

    }),
})


export const { useAddToCartMutation, useDeleteCartMutation, useGetCartQuery, useSignUpMutation, useSignInMutation, useGetUserQuery,useAddNewAddressMutation,useDeleteAddressMutation } = baseApi