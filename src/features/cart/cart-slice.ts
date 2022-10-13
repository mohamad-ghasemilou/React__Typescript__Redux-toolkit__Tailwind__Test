import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {CartItem, ProductId} from "app/types";
import {RootState} from "app/store";
import {selectProductEntities} from "features/product/product-slice";

const initialState : {[id:ProductId]:number} = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity(state, action: PayloadAction<ProductId>) {
            state[action.payload]
                ? state[action.payload]++
                : state[action.payload] = 1
        },
        decreaseQuantity(state, action: PayloadAction<ProductId>) {
            state[action.payload] === 1
                ? delete state[action.payload]
                : state[action.payload]--
        },
        removeFromCart(state, action: PayloadAction<ProductId>) {
            delete state[action.payload]
        }
    }
})


////////////////////// A C T I O N S
export const { increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;


////////////////////// S E L E C T O R S
export const selectCart = (state:RootState) => state.cart

export const selectCartItems = createSelector(
    selectProductEntities,
    (state:RootState) => state.cart,
    (products, cart) => {
        let cartItems : CartItem[] = [];
        for (const [productId, quantity] of Object.entries(cart)) {
            const product = products[productId];
            if (!product) return
            const {id, title, price, image} = product;
            cartItems.push({id, title, price, image, quantity})
        }
        return cartItems
    }
)


export const selectProductsCartQuantity = createSelector(
    selectCart,
    (state:RootState, productId:ProductId) => productId,
    (cart, productId) => cart[productId]
)

export const selectTotalCart = createSelector(selectCart, items => {
    const quantities = Object.values(items);
    return quantities.reduce((total, num) => total + num, 0)
})

export const selectTotalPrice = createSelector(
    selectProductEntities,
    (state:RootState) => state.cart,
    (products, cart) => {
        console.log({products, cart})
        let totalPrice : number = 0;
        for (const [productId, quantity] of Object.entries(cart)) {
            const product = products[productId];
            if (!product) return
            const {price} = product;
            totalPrice = totalPrice + (quantity * price)
        }
        return totalPrice.toFixed(2)
    }
)



