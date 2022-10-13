import {useAppSelector} from "app/hooks";
import {selectCartItems, selectTotalPrice} from "features/cart/cart-slice";
import CartItem from "features/cart/cart-item";

function CartPage() {
    //////////////////////////////////////////// H O O K S
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(selectTotalPrice);


    //////////////////////////////////////////// JSX
    return (
        <div className={styles.container}>
            {
                cartItems?.map(item => <CartItem key={item.id} {...item} />)
            }

            <span>
                total price = € {totalPrice}
            </span>
        </div>
    );
}

export default CartPage;


//////////////////////////////////////////// S T Y L E S
const styles = {
    container: `container w-full`
}
