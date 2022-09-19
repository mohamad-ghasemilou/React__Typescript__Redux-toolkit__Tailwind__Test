import {Link} from "react-router-dom";
import {cartRoute} from "app/routes";
import {useAppSelector} from "app/hooks";
import {selectTotalCart} from "features/cart/cart-slice";

function HeaderCart() {
    const totalCart = useAppSelector(selectTotalCart);

    return (
        <div className={styles.container}>
            <Link to={cartRoute()} className={styles.item}>cart</Link>
            <span className={styles.total}>{totalCart}</span>
        </div>
    );
}

export default HeaderCart;

const styles = {
    container: `relative`,
    item: `px-4 mx-8`,
    total: `absolute top-5 left-1/2`
};
