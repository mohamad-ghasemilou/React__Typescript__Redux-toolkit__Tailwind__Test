import {Link} from "react-router-dom";
import routes from "app/routes";
import clsx from "clsx";

interface Props {
    name: string;
    isSelected: boolean;
}

function Category({name, isSelected}:Props) {
    const classes = clsx({
        [styles.link]: true,
        [styles.selected]: isSelected && styles.selected

    })
    return <Link to={routes.home + `?category=${name}`} key={name} className={classes}>
        <h3>{name}</h3>
    </Link>
}

export default Category;


const styles = {
    link: `border m-2 p-2`,
    selected: 'bg-blue-300'
}
