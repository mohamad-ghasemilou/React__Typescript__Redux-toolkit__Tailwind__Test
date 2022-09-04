import React from "react";
import {Provider} from "react-redux";
import store from "../app/store";
import {BrowserRouter} from "react-router-dom";

interface Props {
    children: any;
}

function MockApp({children}: Props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    )
}
export default MockApp
