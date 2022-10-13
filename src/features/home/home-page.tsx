import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/hooks";
import {fetchCategories, categoriesSelector, selectedCategorySelector,} from 'features/category/category-slice';
import {fetchProducts, selectProducts} from "features/product/product-slice";
import ProductCard from "features/product/product-card";

function HomePage() {
    //////////////////////////////////////////// H O O K S
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const categories = useAppSelector(categoriesSelector);
    const selectedCategory = useAppSelector(selectedCategorySelector);


    //////////////////////////////////////////// E F F E C T S
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [])


    //////////////////////////////////////////// V A R I A B L E S
    const list = selectedCategory
        ? categories[selectedCategory]
        : products
    ;


    //////////////////////////////////////////// JSX
    return (
        <div className={styles.container}>
            {
                list.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    );
}

export default HomePage;


//////////////////////////////////////////// S T Y L E S
const styles = {
    container: `w-full flex flex-wrap justify-center gap-8 ml-64`
}
