import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
    createSelector
} from '@reduxjs/toolkit';
import type {Category} from "app/types";
import CategoryService from "./categoryService";
import type {RootState} from "app/store";
import ProductService from "features/product/productService";

// export const categoryAdapter = createEntityAdapter<Category>();
    // {
    // Assume IDs are stored in a field other than `book.id`
    // selectId: (book) => book.bookId,
    // Keep the "all IDs" array sorted based on book titles
    // sortComparer: (a, b) => a.title.localeCompare(b.title),
// });

// interface InitialState {
//
// }
//
// const initialState : InitialState = {
//     [a: string] : string
// };

const initialState = {

};

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async _ => {
        const response = await CategoryService.getAll();
        return response.data;
    }
);

export const fetchCategoryProducts = createAsyncThunk(
    'category/fetchCategoryProducts',
    async (categoryName: string) => {
        const response = await ProductService.getByCategory(categoryName);
        console.log("hgfhgf")
        return ({name: categoryName, products:response.data});
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        // setAllCategories(state, payload) {
            // state.push(state, payload)
            // console.log({payload})
            // state.push(...payload)

        // },
        // categoryAdded: categoryAdapter.addOne,
        // categoryReceived(state, action) {
        //     categoryAdapter.setAll(state, action.payload)
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                action.payload.forEach((category:string) => {
                    // @ts-ignore
                    state[category] = []
                })
            })

            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                const {name, products} = action.payload;
                // @ts-ignore
                state[name] = [...products]
                // console.log({payload:action.payload})
                // state[]
                // categoryReceived(action)
                // console.log({logFromReducer: action.payload})
                // productAdapter.addOne(state, action.payload)
                // state = action.payload;
            })
    },
})

// export const categoriesSelector = (state:RootState) => Object.keys(state.category);
export const categoriesSelector = (state:RootState) => state.category;
// @ts-ignore
// export const categoryProductsSelector = (state:RootState, category) => state[category];

// const categories = createSelector()

// const categorySelectors = categoryAdapter.getSelectors((state: RootState) => state.category);

// export const {
//     selectAll: selectCategories,
//     selectById: selectCategoryById,
//     selectEntities: selectCategoryEntities,
//     selectIds: selectCategoryIds,
//     selectTotal: selectCategoryTotal,
// } = categorySelectors;

// export const { setAllCategories } = categorySlice.actions;

