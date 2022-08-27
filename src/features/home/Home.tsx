import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/hooks";
import {categoryAdded, fetchCategories, selectCategories} from 'features/category/category-slice';
import { Link } from "react-router-dom";
import routes from "app/routes";

function Home() {
    const dispatch = useAppDispatch();
    const cats = useAppSelector(selectCategories);

    // const {data = [], isFetching} = useFetchCategoriesQuery();
    // const categories = Object.values(data ? data.entities : {});
    // const categories = useAppSelector(selectAllCategories);

    function addOne() {
        dispatch(categoryAdded({
            id: 444,
            name: 'mgh',
            image: 'myurl'
        }))
    }

    useEffect(() => {
        if (cats.length) return
        dispatch(fetchCategories())
    }, [])

    return (
        <div>
            <Link to="category">category</Link>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <button onClick={addOne}>
                add one category
            </button>
            {
                cats.map(category => {
                    return <Link to={routes.category + '/' + category.id}>
                        <h3 key={category.id}>{category.name}</h3>
                    </Link>
                })
            }
        </div>
    );
}

export default Home;
