import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
    createSelector
} from '@reduxjs/toolkit';
import type {Category} from "app/types";
import CategoryService from "./categoryService";
import type {RootState} from "app/store";

// export const categoryAdapter = createEntityAdapter<Category>();
    // {
    // Assume IDs are stored in a field other than `book.id`
    // selectId: (book) => book.bookId,
    // Keep the "all IDs" array sorted based on book titles
    // sortComparer: (a, b) => a.title.localeCompare(b.title),
// });

const initialState : Category[] = [];

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async _ => {
        const response = await CategoryService.getAll();
        return response.data;
    }
);


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setAllCategories(state, payload) {
            // state.push(state, payload)
            // console.log({payload})
            // state.push(...payload)

        },
        // categoryAdded: categoryAdapter.addOne,
        // categoryReceived(state, action) {
        //     categoryAdapter.setAll(state, action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                // categorySlice.actions.setAllCategories(action.payload)
                state.push(...action.payload)
            })
    },
})

// const categorySelectors = categoryAdapter.getSelectors((state: RootState) => state.category);

// export const {
//     selectAll: selectCategories,
//     selectById: selectCategoryById,
//     selectEntities: selectCategoryEntities,
//     selectIds: selectCategoryIds,
//     selectTotal: selectCategoryTotal,
// } = categorySelectors;

export const { setAllCategories } = categorySlice.actions;

