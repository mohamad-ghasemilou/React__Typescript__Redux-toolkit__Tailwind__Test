import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useAppSelector, useAppDispatch} from 'app/hooks'
import {selectProductById, fetchProduct} from 'features/product/product-slice'
import AddToCart from "features/cart/add-to-cart";
import {homeRoute} from "app/routes";
import {Link} from "react-router-dom";

function ProductPage() {
    //////////////////////////////////////////// H O O K S
    const dispatch = useAppDispatch()
    const {productId = 0} = useParams()
    const product = useAppSelector(state => selectProductById(state, productId ?? ''))


    //////////////////////////////////////////// E F F E C T S
    useEffect(() => {
        dispatch(fetchProduct(Number(productId)))
    },[])


    //////////////////////////////////////////// JSX
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={product?.image} alt='' className="object-contain max-h-full"/>
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{product?.title}</h1>
                <div className={styles.wrapper}>
                    <h2 className={styles.description}>{product?.description}</h2>
                    <Link to={homeRoute(product?.category)} className={styles.category}>#{product?.category}</Link>
                </div>
                <div className="flex justify-between">
                    <h2 className={styles.price}>€ {product?.price}</h2>
                    <AddToCart productId={Number(productId)}/>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;


//////////////////////////////////////////// S T Y L E S
const styles = {
    container: `flex max-h-full max-w-full`,
    title: `text-3xl mb-40`,
    wrapper: `mb-40`,
    description: `text-lg mb-6`,
    category: `text-xl`,
    price: `text-3xl`,
    image: `w-1/2 bg-red-300 max-h-full`,
    details: `w-1/2`,
    addToCart: `w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800`,
    count: `w-40 flex`
}
