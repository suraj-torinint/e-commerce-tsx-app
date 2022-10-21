import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";
import cartSlices from "./cart-reducer";
import productSlice from "./product-reducers";

const rootReducer = combineReducers({
    productReducer: productSlice.reducer,
    cartReducer: cartSlices.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export type RootState = ReturnType<typeof store.getState>;
export const productState = (state: RootState) => {
    return state.productReducer;
};

export const cartState = (state: RootState) => {
    return state.cartReducer;
};

// create your own dispatch function reference with custom typings
export const dispatchStore = store.dispatch as typeof store.dispatch;

export default store;
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
// export type AppDispatch = AppStore['dispatch']
