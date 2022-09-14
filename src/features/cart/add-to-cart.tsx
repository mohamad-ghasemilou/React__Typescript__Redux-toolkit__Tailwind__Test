import {useState} from "react";
import {useAppDispatch, useAppSelector} from "app/hooks";
import {addToCart, removeFromCart, selectProductsCartQuantity} from 'features/cart/cart-slice';
import type {ProductId as productIdType} from "app/types";

interface Props {
    productId: productIdType;
}

function AddToCart({productId}:Props) {
    const dispatch = useAppDispatch()
    const quantity = useAppSelector(store => selectProductsCartQuantity(store, productId))

    function addOne():void {
        dispatch(addToCart(productId));
    }

    function removeOne():void {
        dispatch(removeFromCart(productId));
    }

    return quantity
        ? <div className={styles.wrapper}>
            <button type="button" onPointerDown={removeOne} className={styles.btn}>-</button>
            <span className={styles.count}>{quantity}</span>
            <button type="button" onPointerDown={addOne} className={styles.btn}>+</button>
        </div>
        : <button type="button" className={styles.addToCart} onPointerDown={addOne}>Add to cart</button>
}

export default AddToCart;

const styles = {
    addToCart: `w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 
                dark:focus:ring-blue-800`,
    btn: `bg-blue-700 w-12 h-10 text-[#fff] hover:bg-blue-800 rounded-md text-xl`,
    count: `px-8`,
    wrapper: `w-40 flex items-center`
}