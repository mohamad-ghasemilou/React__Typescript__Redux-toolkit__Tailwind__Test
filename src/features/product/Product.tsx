import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {selectProductById, fetchProduct} from 'features/product/product-slice';
import {useAppSelector, useAppDispatch} from "app/hooks";


function Product() {
    const dispatch = useAppDispatch();
    const { productId } = useParams();
    const product = useAppSelector(state => selectProductById(state, productId ?? ''))
    console.log({product})

    useEffect(() => {
        dispatch(fetchProduct(productId))
    })

    return (
        <div>
            <Link to="/">go to home</Link>
            <br/>
            single product
            <br/>
            {product?.title}
        </div>
    );
}

export default Product;
