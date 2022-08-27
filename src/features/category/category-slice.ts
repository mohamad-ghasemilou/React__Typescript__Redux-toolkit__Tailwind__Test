import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
    createSelector
} from '@reduxjs/toolkit';
import type {Category} from "app/types";
import Services from "services";
import type {RootState} from "app/store";

export const categoryAdapter = createEntityAdapter<Category>();
    // {
    // Assume IDs are stored in a field other than `book.id`
    // selectId: (book) => book.bookId,
    // Keep the "all IDs" array sorted based on book titles
    // sortComparer: (a, b) => a.title.localeCompare(b.title),
// });

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async (limit: number|undefined) => {
        const response = await Services.Category.getAll(limit);
        return response.data;
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState: categoryAdapter.getInitialState(),
    reducers: {
        categoryAdded: categoryAdapter.addOne,
        // categoryReceived(state, action) {
        //     categoryAdapter.setAll(state, action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                // categoryReceived(action)
                categoryAdapter.setAll(state, action.payload)
                // state = action.payload;
            })
    },
})

const categorySelectors = categoryAdapter.getSelectors((state: RootState) => state.category);

export const {
    selectAll: selectCategories,
    selectById: selectCategoryById,
    selectEntities: selectCategoryEntities,
    selectIds: selectCategoryIds,
    selectTotal: selectCategoryTotal,
} = categorySelectors;

export const { categoryAdded } = categorySlice.actions;

