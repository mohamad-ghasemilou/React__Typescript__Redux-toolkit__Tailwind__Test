import {ReactNode} from 'react';
import {useLocation} from "react-router";
import Header from "features/header/header";
import Sidebar from "features/layout/sidebar";
import routes from "app/routes";

interface Props {
    children: ReactNode
}

function Layout({children}: Props) {
    //////////////////////////////////////////// H O O K S
    const location = useLocation();


    //////////////////////////////////////////// C O N D I T I O N S
    const isHome = location.pathname === routes.home


    //////////////////////////////////////////// JSX
    return (
        <>
            <Header/>
            <main className={styles.main}>
                {isHome && <Sidebar />}
                {children}
            </main>

        </>
    );
}

export default Layout;


//////////////////////////////////////////// S T Y L E S
const styles = {
    main: `flex`,
}
