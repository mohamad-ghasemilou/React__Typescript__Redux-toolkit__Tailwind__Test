import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import type {Category} from "app/types";

export const categoryAdapter = createEntityAdapter<Category>();
    // {
    // Assume IDs are stored in a field other than `book.id`
    // selectId: (book) => book.bookId,
    // Keep the "all IDs" array sorted based on book titles
    // sortComparer: (a, b) => a.title.localeCompare(b.title),
// });

// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount: number, thunkAPI) => {
//
//
//         thunkAPI.dispatch(categoryAdapter.setAll(categoryAdapter.getInitialState(), response))
//         // const response = await fetchCount(amount);
//         // The value we return becomes the `fulfilled` action payload
//         return response.data;
//     }
// );


export const categorySlice = createSlice({
    name: 'category',
    initialState: categoryAdapter.getInitialState(),
    reducers: {
        bookAdded: categoryAdapter.addOne,
        categoryReceived(state, action) {
            categoryAdapter.setAll(state, action.payload)
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(incrementAsync.fulfilled, (state, action) => {
    //             state = action.payload;
    //         })
    // },
})

export const { categoryReceived } = categorySlice.actions;

// console.log(store.getState().category);
// { ids: [], entities: {} }

// Can create a set of memoized selectors based on the location of this entity state
// const categorySelectors = categoryAdapter.getSelectors<RootState>(
//     (state) => state.category
// );

// And then use the selectors to retrieve values
// const allBooks = categorySelectors.selectAll(store.getState());
