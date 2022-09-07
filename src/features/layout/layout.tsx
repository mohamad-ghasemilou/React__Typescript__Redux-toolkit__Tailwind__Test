/** @jsxImportSource @emotion/react */
import {ReactNode} from 'react';
import Sidebar from "./sidebar";
import tw from 'twin.macro';
import Header from "features/header/header";

interface Props {
    children: ReactNode
}

function Layout({children}: Props) {
    return (
        <>
            <Header/>
            <div css={styles.main}>
                <Sidebar />
                {children}
            </div>

        </>
    );
}

export default Layout;

const styles = {
    main: tw`flex bg-blue-400`
}
