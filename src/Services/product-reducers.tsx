import { createSlice } from "@reduxjs/toolkit";
import { storeDatatype } from "../Data/service";

const initialState: storeDatatype[] = [
    {
        id: 0,
        title: "",
        description: "",
        price: 0,
        image: "",
        rating: { rate: 0 },
        category: "",
    },
];

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        getProducts(state, action) {
            return [...action.payload];
        },
        cerateProduct(state, action) {
            return [...state, ...action.payload];
        },
    },
});

export const productAction = productSlice.actions

export default productSlice;
