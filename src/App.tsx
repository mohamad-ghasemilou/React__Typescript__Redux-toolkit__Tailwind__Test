import React, {useEffect} from 'react';
import './App.css';
import {useFetchCategoriesQuery} from "features/shop-api-slice";
import {useAppDispatch} from "app/hooks";
import {categoryReceived} from "features/category-slice";
import {Category} from "./app/types";
import type { EntityState } from '@reduxjs/toolkit'


function App() {
    const {data = [], isFetching} = useFetchCategoriesQuery();

    // const categories = Object.values(data ? data.entities : {});

    return (
        <div className="App">

            {
                isFetching
                ? <h1>fetching data ...</h1>
                : data.map((cat) => {
                    return <h3 key={cat?.id}>{cat?.name}</h3>
                })
            }
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
