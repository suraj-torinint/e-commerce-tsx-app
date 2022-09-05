import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../Component/CartItems";
import productData, { productType } from "../Data/ProductData";

localStorage.setItem("cart", JSON.stringify([]));
const Cart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")!);
    let items: productType[] = [];
    const [totalQuantity, setTotalQuantity] = useState(cartItems.length);
    const [totalPrice, setTotalPrice] = useState();
    const handleIncrement = (value: string) => {
        console.log(value);
        setTotalQuantity((prevQuantity: number) => prevQuantity + 1);
    };
    const handleDecrement = (value: string) => {
        console.log(value);
        setTotalQuantity((prevQuantity: number) => (prevQuantity !== 0 && prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    for (const iterator of cartItems) {
        let element: productType[] = [productData.find((product) => product.id === iterator)!];
        items = [...items, ...element];
    }

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
