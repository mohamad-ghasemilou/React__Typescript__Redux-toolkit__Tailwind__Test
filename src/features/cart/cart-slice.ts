import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {ProductId} from "app/types";


const name = 'cart';
const initialState : {[id:ProductId]: number} = {};

export const cartSlice = createSlice({
    name,
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ProductId>) {
            state[action.payload]
                ? state[action.payload]++
                : state[action.payload] = 1
        },
        removeFromCart(state, action: PayloadAction<ProductId>) {
            state[action.payload] === 1
                ? delete state[action.payload]
                : state[action.payload]--
        }
    }
})


////////////////////// A C T I O N S
export const { addToCart, removeFromCart } = cartSlice.actions;


////////////////////// S E L E C T O R S
export const selectProductsCartQuantity = createSelector(
    [
        store => store[name],
        (store, productId) => productId
    ],
    (cart, productId) => cart[productId]
)
