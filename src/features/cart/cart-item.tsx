import type {CartItem as CartItemType} from "app/types";
import {useAppDispatch} from "app/hooks";
import AddToCart from "features/cart/add-to-cart";
import {removeFromCart} from 'features/cart/cart-slice';

function CartItem({id, title, image, price}:CartItemType) {
    //////////////////////////////////////////// H O O K S
    const dispatch = useAppDispatch();


    //////////////////////////////////////////// M E T H O D S
    function handleRemove():void {
        dispatch(removeFromCart(id))
    }


    //////////////////////////////////////////// JSX
    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} alt="product"/>
            <h3>{title}</h3>
            <span>€ {price}</span>
            <AddToCart productId={id} />
            <button type="button" className={styles.btn} onPointerDown={handleRemove}>X</button>
        </div>
    );
}

export default CartItem;


//////////////////////////////////////////// S T Y L E S
const styles = {
    container: `flex bg-gray-100 mb-4 items-center justify-between`,
    image: `object-contain h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg`,
    btn: `bg-red-700 w-12 h-10 text-[#fff] hover:bg-red-800 rounded-md text-xl`,
}
