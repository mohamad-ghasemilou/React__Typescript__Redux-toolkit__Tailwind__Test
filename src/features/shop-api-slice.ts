import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {createAsyncThunk} from '@reduxjs/toolkit'
import type {Category} from "app/types";
import {categoryAdapter, categoryReceived} from 'features/category-slice';
import type { EntityState } from '@reduxjs/toolkit'

const {getInitialState, setAll} = categoryAdapter;



export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1',
        // prepareHeaders(headers) {
        //     return headers
        // },
    }),

    endpoints: (build) => ({
        fetchCategories: build.query<EntityState<Category>, number|void>({
            query(limit = 10) {
                return `/categories?limit=${limit}`
            },
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                // `onStart` side-effect
                // dispatch(messageCreated('Fetching post...'))
                try {
                    const { data } = await queryFulfilled
                    // `onSuccess` side-effect
                    dispatch(categoryReceived(data))
                } catch (err) {
                    // `onError` side-effect
                    // dispatch(messageCreated('Error fetching post!'))
                }
            },
            transformResponse(response: Category[]) {
                // console.log(setAll(getInitialState(), response))
                // categoryReceived(response)
                return setAll(getInitialState(), response)
                // return categoryReceived(response);
            }
        })
    }),
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(incrementAsync.fulfilled, (state, action) => {
    //             state = action.payload;
    //         })
    // },
});
export const { useFetchCategoriesQuery } = apiSlice;
