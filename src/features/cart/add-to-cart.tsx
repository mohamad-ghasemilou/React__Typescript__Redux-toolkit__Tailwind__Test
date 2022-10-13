import {useAppDispatch, useAppSelector} from "app/hooks";
import type {ProductId as productIdType} from "app/types";
import {increaseQuantity, decreaseQuantity, selectProductsCartQuantity} from 'features/cart/cart-slice';

interface Props {
    productId: productIdType;
}

function AddToCart({productId} : Props) {
    //////////////////////////////////////////// H O O K S
    const dispatch = useAppDispatch();
    const quantity = useAppSelector(store => selectProductsCartQuantity(store, productId));


    //////////////////////////////////////////// M E T H O D S
    function addOne():void {
        dispatch(increaseQuantity(productId));
    }

    function removeOne():void {
        dispatch(decreaseQuantity(productId));
    }


    //////////////////////////////////////////// JSX
    return quantity
        ? <div className={styles.wrapper}>
            <button type="button" onPointerDown={removeOne} className={styles.btn}>-</button>
            <span className={styles.count}>{quantity}</span>
            <button type="button" onPointerDown={addOne} className={styles.btn}>+</button>
        </div>
        : <button type="button" className={styles.addToCart} onPointerDown={addOne}>Add to cart</button>
}

export default AddToCart;


//////////////////////////////////////////// S T Y L E S
const styles = {
    addToCart: `w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 
                dark:focus:ring-blue-800`,
    btn: `bg-blue-700 w-12 h-10 text-[#fff] hover:bg-blue-800 rounded-md text-xl`,
    count: `px-8`,
    wrapper: `w-40 flex items-center`
};
