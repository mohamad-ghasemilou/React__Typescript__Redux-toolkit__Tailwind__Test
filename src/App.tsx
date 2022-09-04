import './App.scss';
import routes from 'app/routes';
import { Routes, Route } from "react-router-dom";
import HomePage from "features/home/home-page";
import ProductPage from "features/product/product-page";
import Header from "features/header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={styles.main}>
                <Routes>
                    <Route path={routes.home} element={<HomePage/>} />
                    <Route path={routes.singleProduct} element={<ProductPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

const styles = {
    main: `container px-16 py-8`
};

// const domain = 'https://pro-api.coinmarketcap.com';
//
// const headers = {
//   "Accept": "application/json",
//   "Accept-Encoding": "deflate, gzip",
//   "X-CMC_PRO_API_KEY": "2dbbca98-8fdc-4242-82e5-ba13a867ea19"
// };

//todo: app css mixin
