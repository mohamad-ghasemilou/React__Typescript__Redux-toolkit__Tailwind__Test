import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {ProductId} from "app/types";
import {RootState} from "app/store";

const initialState : {
    [id:ProductId]: number
} = {}

export const cartSlice = createSlice({
    name: 'cart',
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

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectProductsCartQuantity = createSelector(
    [
        store => store.cart,
        (state, productId) => productId
    ],
    (cart, productId) => cart[productId]
)
