import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../Component/CartItems";
import productData, { productType } from "../Data/ProductData";

localStorage.setItem("cart", JSON.stringify([]));
const Cart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")!);
    let items: productType[] = [];
    const [totalQuantity, setTotalQuantity] = useState(cartItems.length);

    for (const iterator of cartItems) {
        let element: productType[] = [productData.find((product) => product.id === iterator)!];
        items = [...items, ...element];
    }

    let price = items
        .map((product) => Number(product.price))
        .reduce((a, b) => {
            return a + b;
        }, 0);
    const [totalPrice, setTotalPrice] = useState(price);

    const handleIncrement = (quantity: number, price: number) => {
        setTotalQuantity((prevQuantity: number) => prevQuantity + 1);
        setTotalPrice((prevPrice) => prevPrice + price);
    };
    const handleDecrement = (quantity: number, price: number) => {
        setTotalQuantity((prevQuantity: number) => (prevQuantity !== cartItems.length && quantity > 1 ? prevQuantity - 1 : prevQuantity));
        setTotalPrice((prevPrice) => (quantity > 1 ? prevPrice - price : prevPrice));
    };

    if (items.length === 0) {
        return (
            <>
                <div className="container m-5 text-center">
                    <p className="fs-1">No Items in Cart</p>
                    <Link className="btn btn-primary" to={"/shop"}>
                        Shop Now
                    </Link>
                </div>
            </>
        );
    }
    return (
        <div className="container">
            <div className="card my-3 text-center">
                <div className="card-title m-3 fs-3">Total Cart Items {totalQuantity}</div>
            </div>
            {items.map((product) => (
                <CartItems key={product.id} title={product.title} price={product.price} image={product.image} setIncrementQuantity={handleIncrement} setDecermentQuantity={handleDecrement} />
            ))}
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">Total Price : ₹ {totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
