import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import type {Product, ProductId} from "app/types";
import type {RootState} from "app/store";
import ProductService from "features/product/product-service";

export const productAdapter = createEntityAdapter<Product>();

////////////////////// T H U N K S
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (limit: number|undefined) => {
        const response = await ProductService.getAll(limit);
        return response.data;
    }
);

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (productId: ProductId) => {
        const response = await ProductService.getById(productId);
        return response.data;
    }
);


////////////////////// S L I C E
export const productSlice = createSlice({
    name: 'product',
    initialState: productAdapter.getInitialState(),
    reducers: {},
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


////////////////////// S E L E C T O R S
const productSelectors = productAdapter.getSelectors((state: RootState) => state[productSlice.name]);

export const {
    selectAll: selectProducts,
    selectById: selectProductById,
    selectEntities: selectProductEntities,
    selectIds: selectProductIds,
    selectTotal: selectProductTotal,
} = productSelectors;
