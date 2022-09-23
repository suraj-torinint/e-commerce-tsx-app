import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-reducers";

const store = configureStore({
    reducer: {
        productReducer: productSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const productState = (state: RootState) => {
    return state.productReducer;
};

export default store;
