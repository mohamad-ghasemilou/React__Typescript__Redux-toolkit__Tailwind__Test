/** @jsxImportSource @emotion/react */
import {useState, useEffect} from 'react';
import tw from 'twin.macro';
import {useAppDispatch, useAppSelector} from "app/hooks";
import {
    fetchCategories,
    fetchCategoryProducts,
    categoriesSelector,
} from 'features/category/category-slice';
import {fetchProducts, selectProducts} from "features/product/product-slice";
import Categories from 'features/category/categories'
import Products from "features/product/products";



function HomePage() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const categories = useAppSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = useState<string|null>(null);

    function addOne() {
        // dispatch(categoryAdded({
        //     id: 444,
        //     name: 'mgh',
        //     image: 'myurl'
        // }))
    }

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [])

    function getCategoryProducts(name: string) {
        if (name === "All") {
            setSelectedCategory(null)
            return
        }

        dispatch(fetchCategoryProducts(name))
        setSelectedCategory(name)
    }

    return (
        <div css={styles.container}>
            {/*<Link to="category">category</Link>*/}
            {/*<h1 className="text-3xl font-bold underline">*/}
            {/*    Hello world!*/}
            {/*</h1>*/}
            {/*<button onClick={addOne}>*/}
            {/*    add one category*/}
            {/*</button>*/}

            <Categories list={Object.keys(categories)} getCategoryProducts={getCategoryProducts}/>

            <Products list={selectedCategory
                    ? categories[selectedCategory]
                    : products}
            />
        </div>
    );
}

export default HomePage;

const styles = {
    container: tw`container flex`
}
