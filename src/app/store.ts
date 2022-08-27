import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';

import {categorySlice} from "features/category/category-slice";

const store = configureStore({
    reducer: {
        [categorySlice.name]: categorySlice.reducer
    },

    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(apiSlice.middleware);
    // }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// export const wrapper = createWrapper<AppStore>(makeStore);
// export default store;
