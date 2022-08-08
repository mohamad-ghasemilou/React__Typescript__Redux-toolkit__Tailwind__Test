import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import type {Category} from "app/types";
import {categoryReceived} from 'features/category-slice';




export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1',
        // prepareHeaders(headers) {
        //     return headers
        // },
    }),

    endpoints: (build) => ({
        fetchCategories: build.query<Category[], number|void>({
            query(limit = 10) {
                return `/categories?limit=${limit}`
            },

            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled
                dispatch(categoryReceived(data))
            },
        })
    })
});
export const { useFetchCategoriesQuery } = apiSlice;
