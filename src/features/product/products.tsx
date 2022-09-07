import {Product} from "app/types";
import ProductCard from "features/product/product-card";

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
