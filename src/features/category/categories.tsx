import {Category as CategoryType} from "app/types";
import {useAppDispatch, useAppSelector, useQuery} from "app/hooks";
import {categoriesSelector, setSelectedCategory, fetchCategoryProducts} from "features/category/category-slice";
import Category from "features/category/category";
import {useEffect} from "react";


function Categories() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(categoriesSelector);
    const categoryQuery = useQuery('category')

    useEffect(() => {
        switch (categoryQuery) {
            case null:
                return;
            case "All":
                dispatch(setSelectedCategory(""))
                break
            default:
                dispatch(setSelectedCategory(categoryQuery))
                dispatch(fetchCategoryProducts(categoryQuery))
                break
        }
    },[categoryQuery])

    return (
        <div className={styles.container}>
            <h1>categories</h1>
            <Category name="All" isSelected={categoryQuery === "All" || !categoryQuery}/>
            {
                Object.keys(categories).map((category: CategoryType) => <Category key={category} name={category} isSelected={category === categoryQuery}/>)
            }
        </div>
    )
}

export default Categories;


const styles = {
    container: `flex flex-col text-center fixed`
}

