import Categories from 'features/category/categories';

interface Props {
    visible: boolean
}

function Sidebar({visible}: Props) {
    return (
        <aside className={visible ? styles.container : styles.hide}>
            <Categories />
        </aside>
    );
}

export default Sidebar;

const styles = {
    container: `w-60 pt-16 bg-green-500 flex justify-center`,
    hide: `hidden`
}
