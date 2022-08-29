import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import routes from "app/routes";
import {useAppDispatch, useAppSelector} from "app/hooks";
import type {Category as CategoryType} from "app/types";
import {
    fetchCategories,
    fetchCategoryProducts,
    categoriesSelector,
    // categoryProductsSelector
} from 'features/category/category-slice';
import {fetchProducts, selectProducts} from "features/product/product-slice";

function Home() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const categories = useAppSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    // @ts-ignore
    // const categoryProducts = useAppSelector((state, category) => categoryProductsSelector(category));

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
        <div>
            {/*<Link to="category">category</Link>*/}
            {/*<h1 className="text-3xl font-bold underline">*/}
            {/*    Hello world!*/}
            {/*</h1>*/}
            {/*<button onClick={addOne}>*/}
            {/*    add one category*/}
            {/*</button>*/}

            <div style={{background: 'skyblue'}}>
                <h1>categories</h1>
                <Category data="All" getCategoryProducts={getCategoryProducts}/>
                {
                  Object.keys(categories)
                         .map(category =>
                        <Category data={category} getCategoryProducts={getCategoryProducts}/>
                    )
                }
            </div>

            <Products data={selectedCategory
                // @ts-ignore
                ? categories[selectedCategory]
                : products} />
            {/*<h1>a: {a}</h1>*/}
            {/*<br/>*/}
            {/*<button type="button" onClick={handleClick}>*/}
            {/*    do something*/}
            {/*</button>*/}
        </div>
    );
}

export default Home;

interface CategoryProps {
    data: CategoryType;
    getCategoryProducts: (name: string) => void
}

function Category({data: categoryName, getCategoryProducts}: CategoryProps) {

    function handleClick() {
        getCategoryProducts(categoryName)
    }

    return (
        <button type="button" onClick={handleClick} className="border m-2 p-2">
            <h3 key={categoryName}>{categoryName}</h3>
        </button>
    )
}

function Products({data}: {data:any}) {
    return (
        <div style={{background: ''}}>
            {
                //@ts-ignore
                data.map(({id, title}) => <Link to={routes.product + '/' + id}>
                        <h3 key={id}>{title}</h3>
                    </Link>
                )
            }
        </div>
    )
}
