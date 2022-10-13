import 'App.scss';
import routes from 'app/routes';
import { Routes, Route } from "react-router-dom";
import Layout from "features/layout/layout";
import HomePage from "features/home/home-page";
import ProductPage from "features/product/product-page";
import CartPage from "features/cart/cart-page";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={routes.home} element={<HomePage/>} />
                <Route path={routes.singleProduct} element={<ProductPage/>} />
                <Route path={routes.cart} element={<CartPage/>} />
            </Routes>
        </Layout>
    );
}

export default App;
