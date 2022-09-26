import { createSlice } from "@reduxjs/toolkit";
import StoreData from "../Data/service";

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
            return action.payload
        },
        addToCart(state, action) {
            const newitem: initialStateType = action.payload;
            let dataCart = newitem.carts[0];
            let existingItem = state.carts.find((cart) => cart.id === dataCart.id);
            if (!existingItem) {
                state.totalQuantity += 1
                state.totalPrice += dataCart.price;
                state.carts.push({
                    id: dataCart.id,
                    title: dataCart.title,
                    image: dataCart.image,
                    price: dataCart.price,
                    quantity: dataCart.quantity,
                });
            } else {
                existingItem.quantity += 1;
                state.totalQuantity += 1
                state.totalPrice += dataCart.price;
            }
            StoreData.postCart({ totalQuantity: state.totalQuantity, totalPrice: state.totalPrice, carts: state.carts });
        },
        decreaseCart(state, action) {
            const item: initialStateType = action.payload;
            let cartItem = item.carts[0];
            let existingItem = state.carts.find((cart) => cart.id === cartItem.id);
            if (existingItem) {
                state.totalQuantity -= 1
                existingItem.quantity -= 1;
                state.totalPrice -= cartItem.price;
            } else {
                console.log("Item not found");
            }
            StoreData.postCart({ totalQuantity: state.totalQuantity, totalPrice: state.totalPrice, carts: state.carts });
        },
        removeCart(state, action) {
            let item: initialStateType = action.payload;
            let removeItem = item.carts[0];
            let existingItem = state.carts.find((cart) => cart.id === removeItem.id);
        },
    },
});

export const cartAction = cartSlices.actions;

export default cartSlices;
