import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import {apiSlice} from "features/shop-api-slice";
import {categorySlice} from "features/category-slice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [categorySlice.name]: categorySlice.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type AppStore = ReturnType<typeof makeStore>;
//
//
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     AppState,
//     unknown,
//     Action<string>
//     >;
// export const wrapper = createWrapper<AppStore>(makeStore);
//
// export default store;
