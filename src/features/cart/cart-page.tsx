import {useAppSelector} from "app/hooks";
import {selectCartItems} from "features/cart/cart-slice";
import CartItem from "features/cart/cart-item";

function CartPage() {
    const cartItems = useAppSelector(selectCartItems);

    return (
        <div>
            <h1>cart page</h1>
            {
                cartItems?.map(item => <CartItem {...item} />)
            }
        </div>
    );
}

export default CartPage;
