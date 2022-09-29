import { createSlice } from "@reduxjs/toolkit";

export interface initialStateType {
    [x: string]: any;
    totalQuantity: number;
    totalPrice: number;
    carts: [{ id: number; title: string; image: string; price: number; quantity: number }];
}

const initialState: initialStateType = {
    totalQuantity: 0,
    totalPrice: 0,
    carts: [{ id: 0, title: "", image: "", price: 0, quantity: 1 }],
};

const cartSlices = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        getCart(state, action) {
            return action.payload;
        },
        addToCart(state, action) {
            return action.payload;
        },
        decreaseCart(state, action) {
            return action.payload;
        },
        removeCart(state, action) {
            return action.payload;
        },
    },
});

export const cartAction = cartSlices.actions;

export default cartSlices;
