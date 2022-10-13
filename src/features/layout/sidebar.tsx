import Categories from 'features/category/categories';

function Sidebar() {
    return (
        <div className={styles.container}>
            <Categories />
        </div>
    );
}

export default Sidebar;


//////////////////////////////////////////// S T Y L E S
const styles = {
    container: `w-64 bg-green-500 flex justify-center fixed`,
}
