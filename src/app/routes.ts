const home = '/';
// const category = 'category';
// const singleCategory = category + '/:categoryName'
const product = 'product'
const singleProduct = product + '/:productId'

const routes = {
    home,
    product,
    singleProduct
    // singleCategory,
};

export default routes;

export function homeRoute(query?:string):string {
    return routes.home + (query ? `?category=${query}` : '');
}

export function productRoute(id:number):string {
    return routes.product + '/' + id
}


