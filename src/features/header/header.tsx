/** @jsxImportSource @emotion/react */
import routes from "app/routes";
import {Link} from "react-router-dom";
import tw from 'twin.macro';
// import {sizes} from "app/variables";

function Header() {
    return (
        <div css={styles.container}>
            <Link to={routes.home}>go to home</Link>
        </div>
    );
}

export default Header;

const styles = {
    container: tw`flex h-20 bg-red-700 sticky top-0`
}
