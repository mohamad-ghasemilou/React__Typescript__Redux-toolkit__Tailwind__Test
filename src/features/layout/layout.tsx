import {ReactNode} from 'react';
import {useLocation} from "react-router";
import Header from "features/header/header";
import Sidebar from "features/layout/sidebar";
import routes from "app/routes";

interface Props {
    children: ReactNode
}

function Layout({children}: Props) {
    const location = useLocation();
    const showSidebar = location.pathname === routes.home

    return (
        <>
            <Header/>
            <main className={styles.wrapper}>
                <Sidebar visible={showSidebar} />
                <div className={styles.main}>
                    {children}
                </div>
            </main>
        </>
    );
}

export default Layout;

const styles = {
    wrapper: `flex`,
    main: `container py-16 px-8`
}
