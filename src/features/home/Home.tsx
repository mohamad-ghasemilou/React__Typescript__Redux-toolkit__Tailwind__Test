import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/hooks";
import {fetchCategories} from 'features/category/category-slice';
import {fetchProducts, selectProducts} from "features/product/product-slice";
import { Link } from "react-router-dom";
import routes from "app/routes";


function Home() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.category);
    const products = useAppSelector(selectProducts);

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
    },[])

    function getCategoryProducts() {

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

            <div style={{background: 'blue'}}>
                <h1>categories</h1>
                {
                    categories.map(category => {
                        return <button onClick={getCategoryProducts}>
                            <h3 key={category}>{category}</h3>
                        </button>
                    })
                }
            </div>

            <div style={{background: 'red'}}>
                {
                    products.map(({id, title}) => <Link to={routes.product + '/' + id}>
                            <h3 key={id}>{title}</h3>
                        </Link>
                    )
                }
            </div>
            {/*<h1>a: {a}</h1>*/}
            {/*<br/>*/}
            {/*<button type="button" onClick={handleClick}>*/}
            {/*    do something*/}
            {/*</button>*/}
        </div>
    );
}

export default Home;


