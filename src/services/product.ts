import {get, post, put, remove} from 'services/main';
import type {CreateProduct} from "app/types";

const productsUrl = "/products";

const Product = {
    getAll(limit: number = 10, offset: number = 0) {
        return get(productsUrl + `?limit=${limit}&offset=${offset}`);
    },

    getById(productId:number) {
        return get(productsUrl + "/" + productId);
    },

    create(data: CreateProduct) {
        return post(productsUrl, data);
    },

    update(productId: number, data: CreateProduct) {
        return put(productsUrl + "/" + productId, data);
    },

    remove(productId:number) {
        return remove(productsUrl + "/" + productId);
    }
};

export default Product;
