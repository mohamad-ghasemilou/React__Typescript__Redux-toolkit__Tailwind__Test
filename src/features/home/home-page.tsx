/** @jsxImportSource @emotion/react */
import {useState, useEffect} from 'react';
import tw from 'twin.macro';
import {useAppDispatch, useAppSelector} from "app/hooks";
import {
    fetchCategories,
    categoriesSelector,
    selectedCategorySelector,
} from 'features/category/category-slice';
import {fetchProducts, selectProducts} from "features/product/product-slice";
import ProductCard from "../product/product-card";


function HomePage() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const categories = useAppSelector(categoriesSelector);
    const selectedCategory = useAppSelector(selectedCategorySelector);

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

    const list = selectedCategory
        ? categories[selectedCategory]
        : products;

    // console.log({selectedCategory})
    // console.log({categories})

    return (
        <div css={styles.container}>
            <div className="flex flex-wrap gap-8">
                {
                    list.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
}

export default HomePage;

const styles = {
    container: tw`container flex justify-center bg-red-500`
}
