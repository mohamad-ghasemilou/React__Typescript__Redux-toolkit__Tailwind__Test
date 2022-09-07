/** @jsxImportSource @emotion/react */
import {Category as CategoryType} from "app/types";
import tw from 'twin.macro'
import {useAppDispatch, useAppSelector} from "app/hooks";
import {categoriesSelector, setSelectedCategory, fetchCategoryProducts} from "./category-slice";

function Categories() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(categoriesSelector);

    function getCategoryProducts(category: CategoryType) {
        if (category === "All") {
            dispatch(setSelectedCategory(""))
            return
        }

        dispatch(setSelectedCategory(category))
        dispatch(fetchCategoryProducts(category))
    }

    return (
        <div css={styles.container}>
            <h1>categories</h1>
            <button type="button" onClick={_=>getCategoryProducts("All")} className="border m-2 p-2">
                <h3>All</h3>
            </button>
            {
                Object.keys(categories).map((category:CategoryType) =>
                    <button  key={category} type="button" onClick={_=>getCategoryProducts(category)} className="border m-2 p-2">
                        <h3>{category}</h3>
                    </button>
                )
            }
        </div>
    )
}

export default Categories;

const styles = {
    container: tw`w-40`
}


