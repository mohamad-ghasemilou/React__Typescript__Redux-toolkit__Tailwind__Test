const home = '/';
const product = 'product';
const singleProduct = product + '/:productId';
const cart = 'cart';

const routes = {
    home,
    product,
    singleProduct,
    cart
};

export default routes;

export function homeRoute(query?:string):string {
    return routes.home + (query ? `?category=${query}` : '');
}

export function productRoute(id:number):string {
    return routes.product + '/' + id;
}

export function cartRoute():string {
    return routes.cart;
}



