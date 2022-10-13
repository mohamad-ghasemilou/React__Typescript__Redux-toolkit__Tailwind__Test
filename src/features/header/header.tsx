import {homeRoute} from "app/routes";
import {Link} from "react-router-dom";
import HeaderCart from "features/header/header-cart";

function Header() {
    return (
        <header className={styles.container}>
            <Link to={homeRoute()} className={styles.item}>home</Link>
            <HeaderCart />
        </header>
    );
}

export default Header;

const styles = {
    container: `flex items-center h-20 bg-red-700 sticky top-0`,
    item: `px-4 mx-8`
}
