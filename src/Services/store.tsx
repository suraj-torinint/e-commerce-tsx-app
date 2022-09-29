import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cart-reducer";
import productSlice from "./product-reducers";

const store = configureStore({
    reducer: {
        productReducer: productSlice.reducer,
        cartReducer: cartSlices.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const productState = (state: RootState) => {
    return state.productReducer;
};

export const cartState = (state: RootState) => {
    return state.cartReducer;
};

// create your own dispatch function reference with custom typings
export const dispatchStore = store.dispatch as typeof store.dispatch


export default store;
