import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "features/home/Home";
import Category from 'features/category/Category';
import routes from 'app/routes'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.singleCategory} element={<Category />} />
            </Routes>
        </div>
    );
}

export default App;

// const domain = 'https://pro-api.coinmarketcap.com';
//
// const headers = {
//   "Accept": "application/json",
//   "Accept-Encoding": "deflate, gzip",
//   "X-CMC_PRO_API_KEY": "2dbbca98-8fdc-4242-82e5-ba13a867ea19"
// };
