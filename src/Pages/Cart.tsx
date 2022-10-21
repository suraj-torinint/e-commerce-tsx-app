import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItems from "../Component/CartItems";
import StoreData from "../Data/service";
import { cartAction } from "../Services/cart-reducer";
import { useAppDispatch, useAppSelector } from "../Services/custom-hooks";
import { cartState } from "../Services/store";

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartData = useAppSelector(cartState);
    const cartItems = cartData.carts.filter((cart) => cart.id !== 0);

    useEffect(() => {
        StoreData.getCart().then((data) => dispatch(cartAction.getCart(data)));
        return () => {};
    }, [dispatch]);

    if (cartData.carts.length <= 0) {
        return (
            <div className="container m-5 text-center">
                <p className="fs-1">No Items in Cart</p>
                <Link className="btn btn-primary" to={"/shop"}>
                    Shop Now
                </Link>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="card my-3 text-center">
                <div className="card-title m-3 fs-3">Total Cart Items {cartData.totalQuantity}</div>
            </div>
            {cartData.carts.length > 0 && (
                cartItems.map((product: { id: number; title: string; price: number; image: string; quantity: number }, index) => (
                    <CartItems key={index} id={product.id} title={product.title} price={product.price} image={product.image} quantity={product.quantity} />
                ))
            )}
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">Total Price : ₹ {Math.round(cartData.totalPrice * 100) / 100}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
