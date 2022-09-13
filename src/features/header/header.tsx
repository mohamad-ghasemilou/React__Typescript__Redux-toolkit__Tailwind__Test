import routes from "app/routes";
import {Link} from "react-router-dom";
import {sizes} from "app/variables";

function Header() {
    return (
        <header className={styles.container}>
            <Link to={routes.home}>go to home</Link>
        </header>
    );
}

export default Header;

const styles = {
    container: `flex h-${sizes.headerHeight} bg-red-700 sticky top-0`
}
