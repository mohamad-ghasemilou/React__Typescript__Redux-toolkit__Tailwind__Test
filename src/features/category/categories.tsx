import {Category as CategoryType} from "app/types";

interface Props {
    list: any;
    getCategoryProducts: (name:string) => void;
}

function Categories({list, getCategoryProducts} : Props) {
    return (
        <div style={{background: 'skyblue'}}>
            <h1>categories</h1>
            <Category name="All" getCategoryProducts={getCategoryProducts}/>
            {
                list.map((category:CategoryType) =>
                    <Category key={category} name={category} getCategoryProducts={getCategoryProducts}/>
                )
            }
        </div>
    )
}

export default Categories;

interface CategoryProps {
    name: CategoryType;
    getCategoryProducts: (name: string) => void;
}

function Category({name, getCategoryProducts}: CategoryProps) {

    function handleClick() {
        getCategoryProducts(name)
    }

    return (
        <button type="button" onClick={handleClick} className="border m-2 p-2">
            <h3 key={name}>{name}</h3>
        </button>
    )
}
