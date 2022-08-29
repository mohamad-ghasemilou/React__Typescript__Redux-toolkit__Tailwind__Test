import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
    // createSelector
} from '@reduxjs/toolkit';
import type {Product} from "app/types";
import type {RootState} from "app/store";
import ProductService from "./productService";

export const productAdapter = createEntityAdapter<Product>();
    // {
    // Assume IDs are stored in a field other than `book.id`
    // selectId: (book) => book.bookId,
    // Keep the "all IDs" array sorted based on book titles
    // sortComparer: (a, b) => a.title.localeCompare(b.title),
// });

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (limit: number|undefined) => {
        const response = await ProductService.getAll(limit);
        return response.data;
    }
);

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (productId: string|undefined) => {
        const response = await ProductService.getById(productId);
        return response.data;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState: productAdapter.getInitialState(),
    reducers: {
        productAdded: productAdapter.addOne,
        // categoryReceived(state, action) {
        //     categoryAdapter.setAll(state, action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                productAdapter.setAll(state, action.payload)
            })

            .addCase(fetchProduct.fulfilled, (state, action) => {
                productAdapter.addOne(state, action.payload)
            })
    },
})

const productSelectors = productAdapter.getSelectors((state: RootState) => state[productSlice.name]);

export const {
    selectAll: selectProducts,
    selectById: selectProductById,
    selectEntities: selectProductEntities,
    selectIds: selectProductIds,
    selectTotal: selectProductTotal,
} = productSelectors;

export const { productAdded } = productSlice.actions;

