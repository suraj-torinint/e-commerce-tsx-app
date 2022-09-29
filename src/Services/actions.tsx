import { Dispatch } from "@reduxjs/toolkit";
import StoreData from "../Data/service";
import { cartAction, initialStateType } from "./cart-reducer";
import store from "./store";

export const AddToCartAction = (cartData: initialStateType) => {
    return async (dispatch: Dispatch) => {
        // let response = dispatch(cartAction.addToCart(cartData));
        const newitem: initialStateType = cartData;
        let dataCart = newitem.carts[0];
        let cartInfo = store.getState().cartReducer;
        let cartInfoItems = cartInfo.carts.slice();
        let existingItem = cartInfoItems.find((cart) => cart.id === dataCart.id) as initialStateType["carts"][0];
        let cartInfoPrice = cartInfo.totalPrice;
        let cartInfoQuantity = cartInfo.totalQuantity + 1;
        if (!existingItem) {
            cartInfoPrice += dataCart.price;
            cartInfoItems = [...cartInfoItems, { id: dataCart.id, title: dataCart.title, image: dataCart.image, price: dataCart.price, quantity: dataCart.quantity }];
        } else {
            cartInfoPrice += dataCart.price;
            let changItem = { ...existingItem };
            changItem.quantity += 1;
            let index = cartInfoItems.findIndex((data) => data.id === dataCart.id);
            cartInfoItems[index] = changItem;
        }
        let newCart: initialStateType = { totalQuantity: cartInfoQuantity, totalPrice: cartInfoPrice, carts: cartInfoItems as initialStateType["carts"] };
        try {
            const data = await StoreData.postCart(newCart);
            dispatch(cartAction.addToCart(newCart));
            console.log(data);
        } catch (error) {
            console.log("Something went wrong");
        }
    };
};

export const DecreaseCartAction = (cartData: initialStateType) => {
    return async (dispatch: Dispatch) => {
        const item: initialStateType = cartData;
        let cartItem = item.carts[0];
        let cartInfo = store.getState().cartReducer;
        let cartInfoItems = cartInfo.carts.slice();
        let existingItem = cartInfoItems.find((cart) => cart.id === cartItem.id);
        let cartInfoPrice = cartInfo.totalPrice;
        let cartInfoQuantity = cartInfo.totalQuantity;
        if (existingItem) {
            cartInfoPrice -= cartItem.price;
            cartInfoQuantity -= 1;
            let changItem = { ...existingItem };
            changItem.quantity -= 1;
            let index = cartInfoItems.findIndex((data) => data.id === cartItem.id);
            cartInfoItems[index] = changItem;
        } else {
            console.log("Item not found");
        }
        let newCart: initialStateType = { totalQuantity: cartInfoQuantity, totalPrice: cartInfoPrice, carts: cartInfoItems as initialStateType["carts"] };
        try {
            const data = await StoreData.postCart(newCart);
            dispatch(cartAction.decreaseCart(newCart));
            console.log(data);
        } catch (error) {
            console.log("Something went wrong");
        }
    };
};

export const RemoveCartAction = (cartData: initialStateType) => {
    return async (dispatch: Dispatch) => {
        let item: initialStateType = cartData;
        let removeItem = item.carts[0];
        let cartInfo = store.getState().cartReducer;
        let cartInfoItems = cartInfo.carts;
        let cartInfoPrice = cartInfo.totalPrice;
        let cartInfoQuantity = cartInfo.totalQuantity;
        let existingItem = cartInfoItems.find((cart) => cart.id === removeItem.id);
        let filteredItems = cartInfoItems.filter((cart) => cart.id !== removeItem.id);

        if (existingItem) {
            cartInfoQuantity -= existingItem.quantity;
            cartInfoPrice -= existingItem.quantity * existingItem.price;
            cartInfoItems = [...filteredItems] as initialStateType["carts"];
        }
        let newCart: initialStateType = { totalQuantity: cartInfoQuantity, totalPrice: cartInfoPrice, carts: cartInfoItems as initialStateType["carts"] };
        try {
            const data = await StoreData.postCart(newCart);
            dispatch(cartAction.decreaseCart(newCart));
            console.log(data);
        } catch (error) {
            console.log("Something went wrong");
        }
    };
};
