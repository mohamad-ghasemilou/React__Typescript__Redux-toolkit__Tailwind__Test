import {get, post, put, remove} from 'services/main';
import type {BaseCategory} from "app/types";

const categoriesUrl = "/categories";

const Category = {
    getAll() {
        return get(categoriesUrl + `?limit=10`);
    },

    getById(categoryId:number) {
        return get(categoriesUrl + "/" + categoryId);
    },

    create(data: BaseCategory) {
        return post(categoriesUrl, data);
    },

    update(categoryId: number, data: BaseCategory) {
        return put(categoriesUrl + "/" + categoryId, data);
    },

    remove(categoryId:number) {
        return remove(categoriesUrl + "/" + categoryId);
    }
};

export default Category;
