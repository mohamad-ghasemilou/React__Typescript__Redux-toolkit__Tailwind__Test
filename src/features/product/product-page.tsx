import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {selectProductById, fetchProduct} from 'features/product/product-slice';
import {useAppSelector, useAppDispatch} from "app/hooks";
import routes from "app/routes";

function ProductPage() {
    const dispatch = useAppDispatch();
    const {productId} = useParams();
    const product = useAppSelector(state => selectProductById(state, productId ?? ''))
    // const {title} = product;
    useEffect(() => {
        dispatch(fetchProduct(productId))
    })

    return (
        <div>
            <Link to={routes.home}>go to home</Link>
            <br/>
            <h1>{product?.title}</h1>
            <h2>{product?.category}</h2>
            <h2>{product?.description}</h2>
            <h2>{product?.price}</h2>
            <img src={product?.image} alt="" width='200'/>
            <AddToCart/>
        </div>
    );
}

export default ProductPage;

function AddToCart() {
    const [count, setCount] = useState(0);

    function showCount() {
        setCount(1)
    }

    function addOne() {
        setCount(count => count + 1);
    }

    function removeOne() {
        count > 0 && setCount(count => count - 1);
    }

    return count
        ? <div className={styles.count}>
            <button type="button" onPointerDown={removeOne}>-</button>
            <span>{count}</span>
            <button type="button" onPointerDown={addOne}>+</button>
        </div>
        : <button type="button" className={styles.addToCart} onPointerDown={showCount}>Add to cart</button>
}

const styles = {
    addToCart: `w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800`,
    count: `w-40 flex`
}
