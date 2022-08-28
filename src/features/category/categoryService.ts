import {get, post, put, remove} from 'app/services';
import type {Category as CategoryType} from "app/types";

const categoriesUrl = "/products/categories";

const CategoryService = {
    getAll() {
        return get(categoriesUrl);
    },

    getByName(category:CategoryType) {
        return get(categoriesUrl + "/" + category)
    },

    create(data: CategoryType) {
        return post(categoriesUrl, data);
    },

    update(categoryId: number, data: CategoryType) {
        return put(categoriesUrl + "/" + categoryId, data);
    },

    remove(categoryId:number) {
        return remove(categoriesUrl + "/" + categoryId);
    }
};

export default CategoryService;
