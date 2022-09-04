import {Link} from "react-router-dom";
import routes from "app/routes";
import {Product} from "app/types";

interface Props {
    list: Product[]
}

function Products({list}: Props) {
    return (
        <div className="flex flex-wrap gap-8">
            {
                list.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    )
}

export default Products;


/////////////////////////////////////////////
interface ProductProps {
    product: Product
}

function ProductCard({product}: ProductProps) {
    const {id, title, category, description, image, price} = product;


    const style = {
        display: '-webkit-box',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical'
    }

    return (
        <Link to={routes.product + '/' + id} className={styles.product}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={image} alt="" width="100%" height="auto"/>
                <div className={styles.content}>
                    <h5 className={styles.title}>
                        {title}
                    </h5>
                    <p className={styles.description}>
                        {description}
                    </p>

                    <h5 className={styles.price}>
                        ${price}
                    </h5>
                </div>
            </div>
        </Link>
    )
}

const styles = {
    product: `max-w-md h-60`,
    wrapper: `h-full flex flex-col bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`,
    image: `object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg`,
    content: `flex flex-col justify-between p-4 leading-normal`,
    title: `mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate1`,
    description: `mb-3 font-normal text-gray-700 dark:text-gray-400 truncate3`,
    price: `text-xl font-bold text-gray-900 dark:text-white`
}
