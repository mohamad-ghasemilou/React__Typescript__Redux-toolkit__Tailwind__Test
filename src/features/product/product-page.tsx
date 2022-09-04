import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useAppSelector, useAppDispatch} from 'app/hooks'
import {selectProductById, fetchProduct} from 'features/product/product-slice'
import {sizes} from "app/variables";

function ProductPage() {
    const dispatch = useAppDispatch()
    const {productId} = useParams()
    const product = useAppSelector(state => selectProductById(state, productId ?? ''))

    useEffect(() => {
        dispatch(fetchProduct(productId))
    })

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={product?.image} alt='' className="object-contain max-h-full"/>
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{product?.title}</h1>
                {/*<h2 className={styles.category}>{product?.category}</h2>*/}
                <h2 className={styles.description}>{product?.description}</h2>
                <div className="flex justify-between">
                    <h2 className={styles.price}>€ {product?.price}</h2>
                    <AddToCart/>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

const styles = {
    container: `flex max-h-full max-w-full`,
    title: `text-3xl mb-40`,
    category: `text-xl`,
    description: `text-lg mb-40`,
    price: `text-3xl`,
    image: `w-1/2 bg-red-300 max-h-full`,
    details: `w-1/2  bg-blue-300`,
    addToCart: `w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800`,
    count: `w-40 flex`
}

function AddToCart() {
    const [count, setCount] = useState(0)

    function showCount() {
        setCount(1)
    }

    function addOne() {
        setCount(count => count + 1)
    }

    function removeOne() {
        count > 0 && setCount(count => count - 1)
    }

    return count
        ? <div className={styles.count}>
            <button type="button" onPointerDown={removeOne}>-</button>
            <span>{count}</span>
            <button type="button" onPointerDown={addOne}>+</button>
        </div>
        : <button type="button" className={styles.addToCart} onPointerDown={showCount}>Add to cart</button>
}
