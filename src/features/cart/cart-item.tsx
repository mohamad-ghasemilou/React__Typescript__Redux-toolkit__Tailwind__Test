import type {CartItem as CartItemType} from "app/types";
import AddToCart from "./add-to-cart";

function CartItem({id, title, image, price, quantity}:CartItemType) {

    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt=""/>
                <h3>{title}</h3>
            </div>

            <span>{price}</span>

            <div>
                <span>-</span>
                <span>{quantity}</span>
                <span>+</span>
            </div>

            <div>
                quantity * price  = euro
            </div>
        </div>
    );
}

export default CartItem;

const styles = {
    container: `flex`
}
